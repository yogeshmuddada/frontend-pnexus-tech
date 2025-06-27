
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface QuickStatsProps {
  stats: {
    materials: number;
    questions: number;
    sessions: number;
    users: number;
  };
}

export const QuickStats = ({ stats }: QuickStatsProps) => {
  const statsWithTrends = [
    { 
      label: 'Study Materials', 
      value: stats.materials, 
      trend: 12, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Active Questions', 
      value: stats.questions, 
      trend: 8, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'Scheduled Sessions', 
      value: stats.sessions, 
      trend: -3, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      label: 'Total Users', 
      value: stats.users, 
      trend: 25, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6">
      {statsWithTrends.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="text-center space-y-2">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                <span className="text-white font-bold text-lg sm:text-xl">{stat.value}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">{stat.label}</h3>
              <div className="flex items-center justify-center gap-1">
                {stat.trend > 0 ? (
                  <ArrowUpIcon className="w-3 h-3 text-green-500" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3 text-red-500" />
                )}
                <Badge 
                  variant="outline" 
                  className={`text-xs ${stat.trend > 0 ? 'text-green-600 border-green-200' : 'text-red-600 border-red-200'}`}
                >
                  {stat.trend > 0 ? '+' : ''}{stat.trend}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
