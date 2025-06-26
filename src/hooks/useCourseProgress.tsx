
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface CourseProgress {
  totalWeeks: number;
  currentWeek: number;
  completedWeeks: number;
  completedSessions: string[];
  weeklyProgress: { [key: number]: boolean };
}

export const useCourseProgress = () => {
  const [progress, setProgress] = useState<CourseProgress>({
    totalWeeks: 0,
    currentWeek: 1,
    completedWeeks: 0,
    completedSessions: [],
    weeklyProgress: {}
  });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    try {
      // Get all course content to calculate total weeks
      const { data: courseData } = await supabase
        .from('course_content')
        .select('*')
        .eq('is_published', true)
        .order('week_number', { ascending: true });

      const totalWeeks = Math.max(...(courseData?.map(c => c.week_number || 0) || [0]));
      
      // Get user progress from localStorage for now (in a real app, this would be in the database)
      const userProgress = JSON.parse(localStorage.getItem(`course_progress_${user?.id}`) || '{}');
      
      // Calculate current week based on course start date
      const courseStartDate = new Date('2025-01-01'); // This should come from your course settings
      const currentDate = new Date();
      const weeksDiff = Math.floor((currentDate.getTime() - courseStartDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
      const currentWeek = Math.min(Math.max(weeksDiff + 1, 1), totalWeeks);
      
      const completedWeeks = Object.values(userProgress.weeklyProgress || {}).filter(Boolean).length;

      setProgress({
        totalWeeks,
        currentWeek,
        completedWeeks,
        completedSessions: userProgress.completedSessions || [],
        weeklyProgress: userProgress.weeklyProgress || {}
      });
    } catch (error) {
      console.error('Error fetching course progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const markWeekComplete = (weekNumber: number) => {
    const newProgress = {
      ...progress,
      weeklyProgress: { ...progress.weeklyProgress, [weekNumber]: true }
    };
    
    const completedWeeks = Object.values(newProgress.weeklyProgress).filter(Boolean).length;
    newProgress.completedWeeks = completedWeeks;
    
    setProgress(newProgress);
    localStorage.setItem(`course_progress_${user?.id}`, JSON.stringify(newProgress));
  };

  const markSessionComplete = (sessionId: string) => {
    const newCompletedSessions = [...progress.completedSessions, sessionId];
    const newProgress = { ...progress, completedSessions: newCompletedSessions };
    
    setProgress(newProgress);
    localStorage.setItem(`course_progress_${user?.id}`, JSON.stringify(newProgress));
  };

  return {
    progress,
    loading,
    markWeekComplete,
    markSessionComplete,
    refreshProgress: fetchProgress
  };
};
