
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Calendar, BookOpen, Video, ExternalLink, User, Menu, X } from 'lucide-react';
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
  const { user, signOut, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { progress, markSessionComplete } = useCourseProgress();

  useEffect(() => {
    // Wait for auth to finish loading before redirecting
    if (!authLoading && !user) {
      navigate('/auth');
      return;
    }
    
    if (user) {
      fetchData();
    }
  }, [user, navigate, authLoading]);

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

  // Show loading while auth is loading or data is loading
  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Ultra Enhanced Mobile Header */}
      <div className="lg:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
              Frontend Pro
            </h1>
            {profile && (
              <div className="hidden sm:block">
                <p className="text-xs text-gray-600 flex items-center gap-1 truncate">
                  <User className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate max-w-20">{profile.full_name}</span>
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {isAdmin && (
              <Button
                onClick={() => navigate('/admin')}
                variant="outline"
                size="sm"
                className="text-xs px-2 py-1 sm:px-3 sm:py-1.5"
              >
                Admin
              </Button>
            )}
            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              variant="ghost"
              size="sm"
              className="p-1.5 sm:p-2"
            >
              {sidebarOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu Overlay */}
        {sidebarOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-sm border-b border-gray-200 p-3 sm:p-4 space-y-3 shadow-lg">
            {profile && (
              <div className="sm:hidden">
                <p className="text-sm text-gray-600 flex items-center gap-2 truncate">
                  <User className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">Welcome, {profile.full_name}!</span>
                </p>
              </div>
            )}
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
              className="w-full flex items-center gap-2 justify-center"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        )}
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 lg:py-8 max-w-7xl">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center mb-6 lg:mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frontend Pro Dashboard
            </h1>
            {profile && (
              <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm lg:text-base">
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

        {/* Ultra Mobile-First Components */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* User Profile Card - Ultra Mobile Optimized */}
          <UserProfileCard profile={profile} />

          {/* Progress Tracker - Ultra Mobile Optimized */}
          <ProgressTracker 
            totalWeeks={progress.totalWeeks}
            completedWeeks={progress.completedWeeks}
            currentWeek={progress.currentWeek}
          />

          {/* Quick Actions - Ultra Mobile Optimized */}
          <QuickActions />

          {/* Search and Filter - Ultra Mobile Optimized */}
          <SearchAndFilter
            onSearch={setSearchQuery}
            onFilter={setActiveFilter}
            activeFilter={activeFilter}
            searchQuery={searchQuery}
          />
        </div>

        {/* Ultra Enhanced Course Content - Mobile First */}
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 lg:space-y-6">
          {filteredContent.length === 0 ? (
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-600 mb-2">
                  {searchQuery || activeFilter !== 'all' ? 'No matching content found' : 'No Content Available'}
                </h3>
                <p className="text-sm lg:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
                  {searchQuery || activeFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Course content will be published here as the bootcamp progresses.'
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-2">
              {filteredContent.map((content) => (
                <Card key={content.id} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01] lg:hover:scale-[1.02] overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 sm:p-4 lg:p-6">
                    <div className="flex justify-between items-start gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 break-words leading-tight">
                          {content.title}
                        </CardTitle>
                        {content.description && (
                          <p className="text-blue-100 text-xs sm:text-sm lg:text-base break-words leading-relaxed">
                            {content.description}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-2 flex-shrink-0">
                        {content.week_number && (
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs whitespace-nowrap px-1.5 py-0.5">
                            Week {content.week_number}
                          </Badge>
                        )}
                        {progress.completedSessions.includes(content.id) && (
                          <Badge className="bg-green-600 text-white text-xs whitespace-nowrap px-1.5 py-0.5">
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      {/* Topics - Ultra Mobile Optimized */}
                      {content.topics.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm lg:text-base">
                            <BookOpen className="w-4 h-4 flex-shrink-0" />
                            Topics Covered
                          </h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            {content.topics.map((topic, index) => (
                              <div key={index} className="flex items-start gap-2 text-gray-700 p-2 sm:p-3 lg:p-3 bg-gray-50 rounded-lg">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                                <span className="text-xs sm:text-sm lg:text-base break-words leading-relaxed">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Session Info & Videos - Ultra Responsive Layout */}
                      <div className="space-y-3 sm:space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
                        {content.session_date && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm lg:text-base">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              Session Date
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                              {new Date(content.session_date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        )}

                        {/* Video Links - Ultra Mobile Optimized */}
                        {content.gdrive_video_links.length > 0 && (
                          <div className="lg:col-span-1">
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm lg:text-base">
                              <Video className="w-4 h-4 flex-shrink-0" />
                              Videos ({content.gdrive_video_links.length})
                            </h4>
                            <div className="space-y-1.5 sm:space-y-2">
                              {content.gdrive_video_links.map((link, index) => (
                                <div key={index} className="flex flex-col gap-1.5 sm:gap-2">
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm p-2 sm:p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors min-w-0"
                                  >
                                    <Video className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span className="truncate flex-1">Video {index + 1}</span>
                                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                  </a>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleVideoComplete(content.id)}
                                    className="text-xs px-2 py-1 sm:px-3 sm:py-1.5 h-auto self-start"
                                  >
                                    Mark Complete
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Preparation Materials - Ultra Mobile Optimized */}
                      {content.preparation_materials && (
                        <div className="p-2 sm:p-3 lg:p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <h4 className="font-semibold text-amber-800 mb-1.5 sm:mb-2 flex items-center gap-2 text-sm lg:text-base">
                            📚 Preparation Materials
                          </h4>
                          <p className="text-amber-700 text-xs sm:text-sm lg:text-base break-words leading-relaxed">
                            {content.preparation_materials}
                          </p>
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
