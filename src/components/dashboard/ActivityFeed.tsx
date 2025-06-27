
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

interface Activity {
  id: string;
  type: 'completion' | 'question' | 'login' | 'material';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'completion',
    title: 'Video Completed',
    description: 'Finished watching "React Hooks Deep Dive"',
    timestamp: '5 min ago',
  },
  {
    id: '2',
    type: 'question',
    title: 'Question Asked',
    description: 'How to implement useCallback properly?',
    timestamp: '15 min ago',
  },
  {
    id: '3',
    type: 'material',
    title: 'New Material Added',
    description: 'Week 3 study materials are now available',
    timestamp: '1 hour ago',
  },
  {
    id: '4',
    type: 'login',
    title: 'Session Started',
    description: 'Logged in to continue learning',
    timestamp: '2 hours ago',
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'completion': return CheckCircle;
    case 'question': return AlertCircle;
    case 'material': return User;
    default: return Clock;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case 'completion': return 'bg-green-500';
    case 'question': return 'bg-blue-500';
    case 'material': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

export const ActivityFeed = () => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockActivities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {activity.timestamp}
                  </Badge>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
