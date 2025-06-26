
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export const AuthButton = () => {
  return (
    <Link to="/auth">
      <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
        <LogIn className="w-4 h-4" />
        Student Login
      </Button>
    </Link>
  );
};
