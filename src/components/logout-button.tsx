'use client';

import { Button } from '@/components/ui/button';
import { useLogout } from '@/hooks/useLogout';

interface LogoutButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function LogoutButton({ 
  variant = 'outline', 
  size = 'default',
  className 
}: LogoutButtonProps) {
  const { logout, isLoggingOut } = useLogout();

  const handleLogout = () => {
    if (!isLoggingOut) {
      logout();
    }
  };

  return (
    <Button 
      onClick={handleLogout}
      variant={variant}
      size={size}
      disabled={isLoggingOut}
      className={className}
    >
      {isLoggingOut ? 'Signing out...' : 'Sign Out'}
    </Button>
  );
}
