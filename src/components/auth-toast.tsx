'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signOut } from '@aws-amplify/auth';
import '@/lib/amplify';

function AuthToastContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const reason = searchParams.get('reason');
    console.log('AuthToast - reason:', reason); // Debug log

    if (reason === 'auth-required') {
      console.log('Showing auth required toast'); // Debug log
      toast.error('Authentication Required', {
        description: 'You need to sign in to access this page.',
        duration: 5000,
      });
    } else if (reason === 'logout-requested') {
      // Handle logout on client side
      const handleLogout = async () => {
        try {
          await signOut({ global: true });

          // Clear local storage
          if (typeof window !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();
          }

          toast.success('Logged Out', {
            description: 'You have been successfully logged out.',
            duration: 4000,
          });

          // Update URL to remove the logout-requested param
          router.replace('/auth/login');
        } catch (error) {
          console.error('Logout error:', error);
          toast.warning('Logout Issue', {
            description:
              'There was an issue during logout, but you have been signed out.',
            duration: 4000,
          });
          router.replace('/auth/login');
        }
      };

      handleLogout();
    } else if (reason === 'logged-out') {
      toast.success('Logged Out', {
        description: 'You have been successfully logged out.',
        duration: 4000,
      });
    } else if (reason === 'already-logged-out') {
      toast.info('Already Logged Out', {
        description: 'You are already logged out.',
        duration: 3000,
      });
    } else if (reason === 'logout-error') {
      toast.warning('Logout Issue', {
        description:
          'There was an issue during logout, but you have been signed out.',
        duration: 4000,
      });
    }
  }, [searchParams, router]);

  return null;
}

export function AuthToast() {
  return (
    <Suspense fallback={null}>
      <AuthToastContent />
    </Suspense>
  );
}
