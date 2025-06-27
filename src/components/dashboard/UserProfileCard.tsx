import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Calendar } from 'lucide-react';

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
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Avatar className="w-16 h-16 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600">
            <AvatarFallback className="text-white font-semibold">
              {getInitials(profile.full_name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 w-full text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-1 text-lg sm:text-base">
              {profile.full_name}
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </div>

              {profile.created_at && (
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {formatDate(profile.created_at)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
