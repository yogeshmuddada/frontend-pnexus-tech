
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react';

interface ScheduleEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'live' | 'recorded' | 'assignment';
  location: string;
  instructor: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const [events] = useState<ScheduleEvent[]>([
    {
      id: '1',
      title: 'HTML & CSS Fundamentals',
      date: '2025-01-15',
      time: '19:00',
      type: 'live',
      location: 'Zoom Room 1',
      instructor: 'John Doe',
      description: 'Introduction to HTML structure and CSS styling',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'JavaScript Basics',
      date: '2025-01-17',
      time: '19:00',
      type: 'live',
      location: 'Zoom Room 1',
      instructor: 'John Doe',
      description: 'Variables, functions, and control structures',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Project Assignment 1',
      date: '2025-01-20',
      time: '23:59',
      type: 'assignment',
      location: 'Online Submission',
      instructor: 'John Doe',
      description: 'Build a responsive landing page',
      status: 'upcoming'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'live': return Video;
      case 'recorded': return Video;
      case 'assignment': return Clock;
      default: return Calendar;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Course Schedule
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 mt-4">
          {events.map((event) => {
            const TypeIcon = getTypeIcon(event.type);
            return (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <TypeIcon className="w-5 h-5 text-gray-600" />
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>Instructor: {event.instructor}</span>
                    </div>
                    
                    {event.status === 'upcoming' && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Join Session
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
