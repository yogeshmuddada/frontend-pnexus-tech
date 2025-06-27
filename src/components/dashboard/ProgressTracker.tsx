import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import { useCourseProgress } from '@/hooks/useCourseProgress';

interface ProgressTrackerProps {
  totalWeeks: number;
  completedWeeks: number;
  currentWeek: number;
}

export const ProgressTracker = ({
  totalWeeks,
  completedWeeks,
  currentWeek,
}: ProgressTrackerProps) => {
  const { markWeekComplete } = useCourseProgress();
  const progressPercentage = (completedWeeks / totalWeeks) * 100;

  const handleMarkComplete = () => {
    if (currentWeek <= totalWeeks) {
      markWeekComplete(currentWeek);
    }
  };

  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
            Course Progress
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="text-sm text-gray-600">
              Week {currentWeek} of {totalWeeks}
            </div>
            {currentWeek <= totalWeeks && (
              <Button
                onClick={handleMarkComplete}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
              >
                Mark Complete
              </Button>
            )}
          </div>
        </div>

        <Progress value={progressPercentage} className="h-3 mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-6 h-6 text-green-500 mb-1" />
            <span className="text-sm font-medium text-gray-900">{completedWeeks}</span>
            <span className="text-xs text-gray-500">Completed</span>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-6 h-6 text-blue-500 mb-1" />
            <span className="text-sm font-medium text-gray-900">{currentWeek}</span>
            <span className="text-xs text-gray-500">Current</span>
          </div>

          <div className="flex flex-col items-center">
            <Target className="w-6 h-6 text-purple-500 mb-1" />
            <span className="text-sm font-medium text-gray-900">
              {totalWeeks - completedWeeks}
            </span>
            <span className="text-xs text-gray-500">Remaining</span>
          </div>

          <div className="flex flex-col items-center">
            <TrendingUp className="w-6 h-6 text-orange-500 mb-1" />
            <span className="text-sm font-medium text-gray-900">
              {Math.round(progressPercentage)}%
            </span>
            <span className="text-xs text-gray-500">Complete</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
