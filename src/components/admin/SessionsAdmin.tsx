
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Users } from 'lucide-react';

interface ScheduledSession {
  id: string;
  title: string;
  description: string | null;
  session_date: string;
  meeting_link: string | null;
  max_participants: number | null;
  current_participants: number;
  is_active: boolean;
  created_at: string;
}

interface SessionsAdminProps {
  onStatsUpdate: () => void;
}

export const SessionsAdmin = ({ onStatsUpdate }: SessionsAdminProps) => {
  const [sessions, setSessions] = useState<ScheduledSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSession, setEditingSession] = useState<ScheduledSession | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    session_date: '',
    meeting_link: '',
    max_participants: 50,
    is_active: true
  });

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from('scheduled_sessions')
        .select('*')
        .order('session_date', { ascending: true });

      if (error) throw error;
      setSessions(data || []);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch sessions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const sessionData = {
        ...formData,
        session_date: new Date(formData.session_date).toISOString()
      };

      if (editingSession) {
        const { error } = await supabase
          .from('scheduled_sessions')
          .update(sessionData)
          .eq('id', editingSession.id);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Session updated successfully' });
      } else {
        const { error } = await supabase
          .from('scheduled_sessions')
          .insert([sessionData]);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Session created successfully' });
      }

      setShowDialog(false);
      setEditingSession(null);
      resetForm();
      fetchSessions();
      onStatsUpdate();
    } catch (error) {
      console.error('Error saving session:', error);
      toast({
        title: 'Error',
        description: 'Failed to save session',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this session?')) return;

    try {
      const { error } = await supabase
        .from('scheduled_sessions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Session deleted successfully' });
      fetchSessions();
      onStatsUpdate();
    } catch (error) {
      console.error('Error deleting session:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete session',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      session_date: '',
      meeting_link: '',
      max_participants: 50,
      is_active: true
    });
  };

  const openEditDialog = (session: ScheduledSession) => {
    setEditingSession(session);
    const sessionDate = new Date(session.session_date);
    const formattedDate = sessionDate.toISOString().slice(0, 16);
    
    setFormData({
      title: session.title,
      description: session.description || '',
      session_date: formattedDate,
      meeting_link: session.meeting_link || '',
      max_participants: session.max_participants || 50,
      is_active: session.is_active
    });
    setShowDialog(true);
  };

  if (loading) {
    return <div className="text-center py-8">Loading sessions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Scheduled Sessions</h2>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setEditingSession(null); }}>
              <Plus className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingSession ? 'Edit Session' : 'Schedule New Session'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Session Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <Input
                type="datetime-local"
                value={formData.session_date}
                onChange={(e) => setFormData({ ...formData, session_date: e.target.value })}
              />
              <Input
                placeholder="Meeting Link (Zoom, Meet, etc.)"
                value={formData.meeting_link}
                onChange={(e) => setFormData({ ...formData, meeting_link: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Max Participants"
                value={formData.max_participants}
                onChange={(e) => setFormData({ ...formData, max_participants: parseInt(e.target.value) })}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                />
                <span>Active</span>
              </label>
              <Button onClick={handleSubmit} className="w-full">
                {editingSession ? 'Update' : 'Schedule'} Session
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">{session.title}</TableCell>
                  <TableCell>
                    {new Date(session.session_date).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {session.current_participants}/{session.max_participants || '∞'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={session.is_active ? "default" : "secondary"}>
                      {session.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(session)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(session.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
