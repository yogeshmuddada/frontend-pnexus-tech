
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Calendar, BookOpen, Video, ExternalLink, User } from 'lucide-react';

interface CourseContent {
  id: string;
  title: string;
  description: string | null;
  topics: string[];
  preparation_materials: string | null;
  gdrive_video_links: string[];
  week_number: number | null;
  session_date: string | null;
}

interface Profile {
  full_name: string;
  email: string;
}

const Dashboard = () => {
  const [courseContent, setCourseContent] = useState<CourseContent[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      // Fetch course content
      const { data: contentData, error: contentError } = await supabase
        .from('course_content')
        .select('*')
        .eq('is_published', true)
        .order('week_number', { ascending: true });

      if (contentError) {
        console.error('Error fetching course content:', contentError);
        toast({
          title: 'Error',
          description: 'Failed to load course content',
          variant: 'destructive',
        });
      } else {
        setCourseContent(contentData || []);
      }

      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
      } else {
        setProfile(profileData);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    toast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frontend Pro Dashboard
            </h1>
            {profile && (
              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Welcome back, {profile.full_name}!
              </p>
            )}
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Course Content */}
        <div className="grid gap-6">
          {courseContent.length === 0 ? (
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Content Available</h3>
                <p className="text-gray-500">Course content will be published here as the bootcamp progresses.</p>
              </CardContent>
            </Card>
          ) : (
            courseContent.map((content) => (
              <Card key={content.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{content.title}</CardTitle>
                      {content.description && (
                        <p className="text-blue-100 mt-2">{content.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {content.week_number && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          Week {content.week_number}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Topics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Topics to be Covered
                      </h4>
                      <ul className="space-y-2">
                        {content.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Session Info */}
                    <div className="space-y-4">
                      {content.session_date && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Session Date
                          </h4>
                          <p className="text-gray-700">
                            {new Date(content.session_date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      )}

                      {/* Video Links */}
                      {content.gdrive_video_links.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Recorded Videos
                          </h4>
                          <div className="space-y-2">
                            {content.gdrive_video_links.map((link, index) => (
                              <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Video className="w-4 h-4" />
                                Video {index + 1}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preparation Materials */}
                  {content.preparation_materials && (
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-2">
                        📚 Preparation Materials
                      </h4>
                      <p className="text-amber-700">{content.preparation_materials}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
