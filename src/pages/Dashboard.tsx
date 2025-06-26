import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Calendar, BookOpen, Video, ExternalLink, User, Menu } from 'lucide-react';
import { SearchAndFilter } from '@/components/dashboard/SearchAndFilter';
import { ProgressTracker } from '@/components/dashboard/ProgressTracker';
import { UserProfileCard } from '@/components/dashboard/UserProfileCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useCourseProgress } from '@/hooks/useCourseProgress';

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
  created_at?: string;
}

const Dashboard = () => {
  const [courseContent, setCourseContent] = useState<CourseContent[]>([]);
  const [filteredContent, setFilteredContent] = useState<CourseContent[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { progress, markSessionComplete } = useCourseProgress();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchData();
  }, [user, navigate]);

  useEffect(() => {
    filterContent();
  }, [courseContent, searchQuery, activeFilter]);

  useEffect(() => {
    if (user) {
      checkAdminRole();
    }
  }, [user]);

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
        const transformedContent = contentData?.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          topics: Array.isArray(item.topics) ? item.topics.filter((topic): topic is string => typeof topic === 'string') : [],
          preparation_materials: item.preparation_materials,
          gdrive_video_links: Array.isArray(item.gdrive_video_links) ? item.gdrive_video_links.filter((link): link is string => typeof link === 'string') : [],
          week_number: item.week_number,
          session_date: item.session_date,
        })) || [];
        
        setCourseContent(transformedContent);
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

  const checkAdminRole = async () => {
    try {
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .single();
      
      setIsAdmin(data?.role === 'admin');
    } catch (error) {
      // User doesn't have a role entry, which is fine
      setIsAdmin(false);
    }
  };

  const filterContent = () => {
    let filtered = courseContent;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(content =>
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(content => {
        switch (activeFilter) {
          case 'week1':
            return content.week_number === 1;
          case 'week2':
            return content.week_number === 2;
          case 'upcoming':
            return content.session_date && new Date(content.session_date) > new Date();
          case 'completed':
            return content.session_date && new Date(content.session_date) < new Date();
          default:
            return true;
        }
      });
    }

    setFilteredContent(filtered);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    toast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
    });
  };

  const handleVideoComplete = (sessionId: string) => {
    markSessionComplete(sessionId);
    toast({
      title: 'Progress Updated',
      description: 'Session marked as completed!',
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
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frontend Pro
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            {isAdmin && (
              <Button
                onClick={() => navigate('/admin')}
                variant="outline"
                size="sm"
              >
                Admin
              </Button>
            )}
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 lg:py-8">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center mb-8">
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
          <div className="flex items-center gap-2">
            {isAdmin && (
              <Button
                onClick={() => navigate('/admin')}
                variant="outline"
                className="flex items-center gap-2"
              >
                Admin Panel
              </Button>
            )}
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* User Profile Card */}
        <UserProfileCard profile={profile} />

        {/* Progress Tracker */}
        <ProgressTracker 
          totalWeeks={progress.totalWeeks}
          completedWeeks={progress.completedWeeks}
          currentWeek={progress.currentWeek}
        />

        {/* Quick Actions */}
        <QuickActions />

        {/* Search and Filter */}
        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setActiveFilter}
          activeFilter={activeFilter}
          searchQuery={searchQuery}
        />

        {/* Course Content */}
        <div className="space-y-6">
          {filteredContent.length === 0 ? (
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {searchQuery || activeFilter !== 'all' ? 'No matching content found' : 'No Content Available'}
                </h3>
                <p className="text-gray-500">
                  {searchQuery || activeFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Course content will be published here as the bootcamp progresses.'
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {filteredContent.map((content) => (
                <Card key={content.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{content.title}</CardTitle>
                        {content.description && (
                          <p className="text-blue-100 text-sm">{content.description}</p>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        {content.week_number && (
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                            Week {content.week_number}
                          </Badge>
                        )}
                        {progress.completedSessions.includes(content.id) && (
                          <Badge className="bg-green-600 text-white text-xs">
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Topics to be Covered
                        </h4>
                        <div className="grid gap-2">
                          {content.topics.map((topic, index) => (
                            <div key={index} className="flex items-start gap-2 text-gray-700 p-2 bg-gray-50 rounded-lg">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Session Info & Videos */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {content.session_date && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Session Date
                            </h4>
                            <p className="text-gray-700 text-sm">
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
                                <div key={index} className="flex items-center gap-2">
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex-1"
                                  >
                                    <Video className="w-4 h-4" />
                                    Video {index + 1}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleVideoComplete(content.id)}
                                    className="text-xs"
                                  >
                                    Complete
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Preparation Materials */}
                      {content.preparation_materials && (
                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                            📚 Preparation Materials
                          </h4>
                          <p className="text-amber-700 text-sm">{content.preparation_materials}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
