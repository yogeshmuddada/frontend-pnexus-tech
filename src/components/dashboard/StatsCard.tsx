
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

export const StatsCard = ({ title, value, icon: Icon, trend, color }: StatsCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <CardContent className="p-4 sm:p-6 relative">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <div className={`flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                <span className="font-medium">
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
                <span className="ml-1 text-gray-500">vs last week</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full bg-gradient-to-br ${color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
