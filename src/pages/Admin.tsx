
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, MessageCircle, Users, Plus, ArrowLeft } from 'lucide-react';
import { StudyMaterialsAdmin } from '@/components/admin/StudyMaterialsAdmin';
import { QuestionsAdmin } from '@/components/admin/QuestionsAdmin';
import { SessionsAdmin } from '@/components/admin/SessionsAdmin';
import { UsersAdmin } from '@/components/admin/UsersAdmin';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    materials: 0,
    questions: 0,
    sessions: 0,
    users: 0
  });
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    checkAdminRole();
    fetchStats();
  }, [user, navigate]);

  const checkAdminRole = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking admin role:', error);
        toast({
          title: 'Error',
          description: 'Failed to verify admin access',
          variant: 'destructive',
        });
        navigate('/dashboard');
        return;
      }

      if (!data || data.role !== 'admin') {
        toast({
          title: 'Access Denied',
          description: 'You need admin privileges to access this page',
          variant: 'destructive',
        });
        navigate('/dashboard');
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error('Unexpected error:', error);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const [materialsRes, questionsRes, sessionsRes, usersRes] = await Promise.all([
        supabase.from('study_materials').select('id', { count: 'exact' }),
        supabase.from('questions').select('id', { count: 'exact' }),
        supabase.from('scheduled_sessions').select('id', { count: 'exact' }),
        supabase.from('user_roles').select('id', { count: 'exact' })
      ]);

      setStats({
        materials: materialsRes.count || 0,
        questions: questionsRes.count || 0,
        sessions: sessionsRes.count || 0,
        users: usersRes.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-gray-600 mt-1">Manage your course content and users</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Study Materials</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.materials}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Questions</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.questions}</p>
                </div>
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sessions</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.sessions}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.users}</p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="materials" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Study Materials
                </TabsTrigger>
                <TabsTrigger value="questions" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Questions
                </TabsTrigger>
                <TabsTrigger value="sessions" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Sessions
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Users
                </TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="mt-6">
                <StudyMaterialsAdmin onStatsUpdate={fetchStats} />
              </TabsContent>

              <TabsContent value="questions" className="mt-6">
                <QuestionsAdmin onStatsUpdate={fetchStats} />
              </TabsContent>

              <TabsContent value="sessions" className="mt-6">
                <SessionsAdmin onStatsUpdate={fetchStats} />
              </TabsContent>

              <TabsContent value="users" className="mt-6">
                <UsersAdmin onStatsUpdate={fetchStats} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
