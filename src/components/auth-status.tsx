'use client';

import { useAuth } from '@/components/auth-provider';
import { LogoutButton } from '@/components/logout-button';
import { useEffect } from 'react';

export function AuthStatus() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-sm text-muted-foreground">Not authenticated</div>
    );
  }

  useEffect(() => {
    console.log('user : ', user);
  }, [user]);

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <span className="text-muted-foreground">Welcome, </span>
        <span className="font-medium">
          {user.attributes?.name || user.username}
        </span>
      </div>
      <LogoutButton />
    </div>
  );
}
