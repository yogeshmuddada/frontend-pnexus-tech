
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Users, ExternalLink, UserPlus } from 'lucide-react';

interface ScheduledSession {
  id: string;
  title: string;
  description: string | null;
  session_date: string;
  meeting_link: string | null;
  max_participants: number | null;
  current_participants: number;
  is_registered?: boolean;
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const [sessions, setSessions] = useState<ScheduledSession[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && user) {
      fetchSessions();
    }
  }, [isOpen, user]);

  const fetchSessions = async () => {
    try {
      setLoading(true);
      
      // Fetch sessions with registration status
      const { data: sessionsData, error: sessionsError } = await supabase
        .from('scheduled_sessions')
        .select('*')
        .eq('is_active', true)
        .gte('session_date', new Date().toISOString())
        .order('session_date', { ascending: true });

      if (sessionsError) throw sessionsError;

      // Check which sessions the user is registered for
      const { data: registrationsData, error: registrationsError } = await supabase
        .from('session_registrations')
        .select('session_id')
        .eq('user_id', user?.id);

      if (registrationsError) throw registrationsError;

      const registeredSessionIds = new Set(registrationsData?.map(r => r.session_id) || []);

      const sessionsWithRegistration = sessionsData?.map(session => ({
        ...session,
        is_registered: registeredSessionIds.has(session.id)
      })) || [];

      setSessions(sessionsWithRegistration);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      toast({
        title: 'Error',
        description: 'Failed to load scheduled sessions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (sessionId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('session_registrations')
        .insert({
          session_id: sessionId,
          user_id: user.id
        });

      if (error) throw error;

      // Update participant count manually
      const session = sessions.find(s => s.id === sessionId);
      if (session) {
        const { error: updateError } = await supabase
          .from('scheduled_sessions')
          .update({ 
            current_participants: (session.current_participants || 0) + 1 
          })
          .eq('id', sessionId);

        if (updateError) {
          console.error('Error updating participant count:', updateError);
        }
      }

      toast({
        title: 'Success',
        description: 'Successfully registered for the session!',
      });

      fetchSessions(); // Refresh the list
    } catch (error: any) {
      console.error('Error registering for session:', error);
      if (error.code === '23505') {
        toast({
          title: 'Already Registered',
          description: 'You are already registered for this session.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to register for session',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Sessions
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[60vh] space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Loading sessions...</p>
            </div>
          ) : sessions.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Upcoming Sessions</h3>
              <p className="text-gray-500">New sessions will be scheduled and appear here.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {sessions.map((session) => (
                <Card key={session.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{session.title}</CardTitle>
                      <div className="flex gap-2">
                        {session.is_registered && (
                          <Badge variant="default">Registered</Badge>
                        )}
                        <Badge variant="outline">
                          <Users className="w-3 h-3 mr-1" />
                          {session.current_participants}/{session.max_participants || '∞'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {session.description && (
                      <p className="text-gray-600">{session.description}</p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(session.session_date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {new Date(session.session_date).toLocaleTimeString()}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {!session.is_registered ? (
                        <Button 
                          onClick={() => handleRegister(session.id)}
                          className="flex items-center gap-2"
                          disabled={session.max_participants ? session.current_participants >= session.max_participants : false}
                        >
                          <UserPlus className="w-4 h-4" />
                          Register
                        </Button>
                      ) : (
                        session.meeting_link && (
                          <Button asChild>
                            <a
                              href={session.meeting_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Join Meeting
                            </a>
                          </Button>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
