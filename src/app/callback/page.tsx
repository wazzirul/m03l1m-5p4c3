'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, fetchUserAttributes } from '@aws-amplify/auth';
import { useProgress } from '@/hooks/use-progress';
import '@/lib/amplify';

export default function CallbackPage() {
  const router = useRouter();
  const { navigateWithProgress } = useProgress();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Wait a moment for the auth state to settle
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = await getCurrentUser();
        if (user) {
          console.log('OAuth user authenticated:', user);
          
          try {
            const attributes = await fetchUserAttributes();
            console.log('User attributes:', attributes);
            
            // Check if this is a new user (no custom attributes set)
            if (!attributes.name || !attributes.phone_number) {
              // Redirect to onboarding for new social users
              navigateWithProgress('/auth/onboarding');
            } else {
              // Existing user, go to dashboard
              navigateWithProgress('/dashboard');
            }
          } catch (attrError) {
            console.warn('Could not fetch attributes, redirecting to onboarding:', attrError);
            navigateWithProgress('/auth/onboarding');
          }
        } else {
          console.warn('No user found after OAuth callback');
          navigateWithProgress('/auth/login?error=oauth_failed');
        }
      } catch (error) {
        console.error('OAuth callback error:', error);
        navigateWithProgress('/auth/login?error=oauth_failed');
      }
    };

    handleCallback();
  }, [router, navigateWithProgress]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}
