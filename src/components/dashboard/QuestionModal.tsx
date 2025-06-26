
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: string;
  subject: string;
  category: string;
  question: string;
  answer?: string;
  status: 'pending' | 'answered';
  createdAt: string;
  answeredAt?: string;
}

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuestionModal = ({ isOpen, onClose }: QuestionModalProps) => {
  const [activeTab, setActiveTab] = useState<'ask' | 'history'>('ask');
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    question: ''
  });
  const [questions] = useState<Question[]>([
    {
      id: '1',
      subject: 'CSS Flexbox Issue',
      category: 'CSS',
      question: 'I\'m having trouble centering items with flexbox. Can you help?',
      answer: 'To center items with flexbox, use justify-content: center for horizontal centering and align-items: center for vertical centering.',
      status: 'answered',
      createdAt: '2025-01-10',
      answeredAt: '2025-01-10'
    },
    {
      id: '2',
      subject: 'JavaScript Array Methods',
      category: 'JavaScript',
      question: 'What\'s the difference between map() and forEach()?',
      status: 'pending',
      createdAt: '2025-01-12'
    }
  ]);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subject || !formData.category || !formData.question) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    // In a real app, this would send the question to your backend
    toast({
      title: 'Question Submitted',
      description: 'Your question has been sent to the mentor. You\'ll receive an answer within 24 hours.',
    });

    setFormData({ subject: '', category: '', question: '' });
    setActiveTab('history');
  };

  const categories = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'General',
    'Project Help',
    'Career Guidance'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Ask a Question
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="flex gap-2 mb-6">
            <Button
              variant={activeTab === 'ask' ? 'default' : 'outline'}
              onClick={() => setActiveTab('ask')}
              className="flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Ask Question
            </Button>
            <Button
              variant={activeTab === 'history' ? 'default' : 'outline'}
              onClick={() => setActiveTab('history')}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Question History
            </Button>
          </div>

          {activeTab === 'ask' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief summary of your question"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="question">Your Question</Label>
                <Textarea
                  id="question"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Describe your question in detail. Include any code snippets or specific issues you're facing."
                  rows={6}
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Question
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {questions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{question.subject}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{question.question}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{question.category}</Badge>
                        <Badge className={question.status === 'answered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {question.status === 'answered' ? (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Answered
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 mr-1" />
                              Pending
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  {question.answer && (
                    <CardContent className="pt-0">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Mentor's Answer:</h4>
                        <p className="text-blue-800 text-sm">{question.answer}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
