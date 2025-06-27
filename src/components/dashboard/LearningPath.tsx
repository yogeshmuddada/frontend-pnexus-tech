
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Lock, Play, BookOpen } from 'lucide-react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: 'completed' | 'current' | 'locked';
  duration: string;
  topics: string[];
}

const learningModules: LearningModule[] = [
  {
    id: '1',
    title: 'HTML Fundamentals',
    description: 'Master the building blocks of web development',
    progress: 100,
    status: 'completed',
    duration: '2 hours',
    topics: ['Semantic HTML', 'Forms', 'Accessibility']
  },
  {
    id: '2',
    title: 'CSS Styling & Layout',
    description: 'Create beautiful and responsive designs',
    progress: 75,
    status: 'current',
    duration: '3 hours',
    topics: ['Flexbox', 'Grid', 'Responsive Design']
  },
  {
    id: '3',
    title: 'JavaScript Essentials',
    description: 'Learn programming fundamentals',
    progress: 0,
    status: 'locked',
    duration: '4 hours',
    topics: ['ES6+', 'DOM Manipulation', 'Async/Await']
  },
  {
    id: '4',
    title: 'React Development',
    description: 'Build dynamic user interfaces',
    progress: 0,
    status: 'locked',
    duration: '5 hours',
    topics: ['Components', 'Hooks', 'State Management']
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle;
    case 'current': return Play;
    default: return Lock;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'text-green-500';
    case 'current': return 'text-blue-500';
    default: return 'text-gray-400';
  }
};

export const LearningPath = () => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Learning Path
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningModules.map((module, index) => {
          const Icon = getStatusIcon(module.status);
          return (
            <div key={module.id} className="relative">
              {/* Connection Line */}
              {index < learningModules.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />
              )}
              
              <div className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                module.status === 'current' 
                  ? 'border-blue-200 bg-blue-50' 
                  : module.status === 'completed'
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${
                    module.status === 'current'
                      ? 'bg-blue-500'
                      : module.status === 'completed'
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {module.duration}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {module.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    {module.status !== 'locked' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="mt-3 flex justify-end">
                      <Button
                        size="sm"
                        variant={module.status === 'current' ? 'default' : 'outline'}
                        disabled={module.status === 'locked'}
                        className="text-xs"
                      >
                        {module.status === 'completed' ? 'Review' : 
                         module.status === 'current' ? 'Continue' : 'Locked'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
