
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Send, HelpCircle } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  question: string;
  answer: string | null;
  status: string;
  is_public: boolean;
  created_at: string;
}

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuestionModal = ({ isOpen, onClose }: QuestionModalProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    question: ''
  });
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && user) {
      fetchQuestions();
    }
  }, [isOpen, user]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .or(`user_id.eq.${user?.id},is_public.eq.true`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuestions(data || []);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast({
        title: 'Error',
        description: 'Failed to load questions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!user || !newQuestion.title.trim() || !newQuestion.question.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in both title and question',
        variant: 'destructive',
      });
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase
        .from('questions')
        .insert({
          user_id: user.id,
          title: newQuestion.title.trim(),
          question: newQuestion.question.trim(),
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Your question has been submitted successfully!',
      });

      setNewQuestion({ title: '', question: '' });
      fetchQuestions();
    } catch (error) {
      console.error('Error submitting question:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit question',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'answered':
        return 'default';
      case 'pending':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Ask a Question
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Submit new question form */}
          <Card className="border-2 border-dashed border-gray-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Ask Your Question
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Question title (brief summary)"
                value={newQuestion.title}
                onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
              />
              <Textarea
                placeholder="Describe your question in detail..."
                value={newQuestion.question}
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                rows={4}
              />
              <Button 
                onClick={handleSubmit} 
                disabled={submitting}
                className="w-full flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitting ? 'Submitting...' : 'Submit Question'}
              </Button>
            </CardContent>
          </Card>

          {/* Previous questions */}
          <div className="overflow-y-auto max-h-[40vh] space-y-4">
            <h3 className="text-lg font-semibold">Previous Questions</h3>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p>Loading questions...</p>
              </div>
            ) : questions.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Questions Yet</h3>
                <p className="text-gray-500">Ask your first question above!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {questions.map((question) => (
                  <Card key={question.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{question.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant={getStatusColor(question.status)}>
                            {question.status}
                          </Badge>
                          {question.is_public && (
                            <Badge variant="outline">Public</Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Question:</h4>
                        <p className="text-gray-600">{question.question}</p>
                      </div>
                      
                      {question.answer && (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-800 mb-2">Answer:</h4>
                          <p className="text-green-700">{question.answer}</p>
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-500">
                        Asked on {new Date(question.created_at).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
