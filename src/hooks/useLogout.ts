'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { useAuth } from '@/components/auth-provider';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';

export function useLogout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const { refreshUser } = useAuth();
  const { resetTheme } = useTheme();
  const { resetNavigation } = useNavigation();

  useEffect(() => {
    router.prefetch('/auth/login');
  }, [router]);

  const logout = async (global = true) => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await signOut({ global });
      await refreshUser();

      // Reset theme and navigation to defaults
      resetTheme();
      resetNavigation();

      await new Promise((resolve) => setTimeout(resolve, 100));
      router.replace('/auth/login?t=' + Date.now());
    } catch (error) {
      console.error('Logout error:', error);
      router.replace('/auth/login?reason=logout-error');
    } finally {
      setIsLoggingOut(false);
    }
  };

  return { logout, isLoggingOut };
}
