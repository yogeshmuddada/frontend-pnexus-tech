
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MessageCircle, Eye, EyeOff } from 'lucide-react';

interface Question {
  id: string;
  user_id: string;
  title: string;
  question: string;
  answer: string | null;
  status: string;
  is_public: boolean;
  created_at: string;
  profiles?: {
    full_name: string;
    email: string;
  };
}

interface QuestionsAdminProps {
  onStatsUpdate: () => void;
}

export const QuestionsAdmin = ({ onStatsUpdate }: QuestionsAdminProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [answer, setAnswer] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select(`
          *,
          profiles!questions_user_id_fkey (
            full_name,
            email
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuestions(data || []);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch questions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSubmit = async () => {
    if (!selectedQuestion || !answer.trim()) return;

    try {
      const { error } = await supabase
        .from('questions')
        .update({
          answer: answer,
          status: 'answered'
        })
        .eq('id', selectedQuestion.id);

      if (error) throw error;

      toast({ title: 'Success', description: 'Answer submitted successfully' });
      setShowDialog(false);
      setSelectedQuestion(null);
      setAnswer('');
      fetchQuestions();
      onStatsUpdate();
    } catch (error) {
      console.error('Error submitting answer:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit answer',
        variant: 'destructive',
      });
    }
  };

  const togglePublicStatus = async (question: Question) => {
    try {
      const { error } = await supabase
        .from('questions')
        .update({ is_public: !question.is_public })
        .eq('id', question.id);

      if (error) throw error;

      toast({ 
        title: 'Success', 
        description: `Question ${!question.is_public ? 'made public' : 'made private'} successfully` 
      });
      fetchQuestions();
    } catch (error) {
      console.error('Error toggling public status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update question visibility',
        variant: 'destructive',
      });
    }
  };

  const openAnswerDialog = (question: Question) => {
    setSelectedQuestion(question);
    setAnswer(question.answer || '');
    setShowDialog(true);
  };

  if (loading) {
    return <div className="text-center py-8">Loading questions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Questions & Support</h2>
        <Badge variant="outline" className="text-lg px-3 py-1">
          {questions.filter(q => q.status === 'pending').length} Pending
        </Badge>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="font-medium">{question.title}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{question.profiles?.full_name || 'Unknown User'}</div>
                      <div className="text-gray-500">{question.profiles?.email || 'No email'}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={question.status === 'answered' ? 'default' : 
                               question.status === 'pending' ? 'secondary' : 'outline'}
                    >
                      {question.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={question.is_public ? "default" : "secondary"}>
                      {question.is_public ? 'Public' : 'Private'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(question.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openAnswerDialog(question)}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => togglePublicStatus(question)}
                      >
                        {question.is_public ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Answer Question</DialogTitle>
          </DialogHeader>
          {selectedQuestion && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">{selectedQuestion.title}</h3>
                <p className="text-gray-600 mt-2">{selectedQuestion.question}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Answer</label>
                <Textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  rows={6}
                />
              </div>
              <Button onClick={handleAnswerSubmit} className="w-full">
                Submit Answer
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
