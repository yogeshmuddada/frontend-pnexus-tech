
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar } from 'lucide-react';

interface Profile {
  full_name: string;
  email: string;
  created_at?: string;
}

interface UserProfileCardProps {
  profile: Profile | null;
}

export const UserProfileCard = ({ profile }: UserProfileCardProps) => {
  if (!profile) return null;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600">
            <AvatarFallback className="text-white font-semibold">
              {getInitials(profile.full_name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{profile.full_name}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {profile.email}
              </div>
              {profile.created_at && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Joined {formatDate(profile.created_at)}
                </div>
              )}
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active Student
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
