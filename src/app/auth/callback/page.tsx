'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hub } from 'aws-amplify/utils';
import { getCurrentUser } from '@aws-amplify/auth';

export default function CallbackPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hubUnsubscribe: (() => void) | null = null;

    const handleOAuthCompletion = async () => {
      try {
        console.log('OAuth callback page: Checking authentication status...');
        
        // Wait a bit for OAuth to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if user is authenticated
        const user = await getCurrentUser();
        if (user) {
          console.log('OAuth callback: User authenticated, redirecting to dashboard');
          router.push('/dashboard');
          return;
        }
      } catch (error) {
        console.log('OAuth callback: User not yet authenticated, waiting for Hub event...');
      }

      // Listen for OAuth completion via Hub events (based on AWS docs)
      const hubListener = (data: any) => {
        const { payload } = data;
        console.log('OAuth callback Hub event:', payload.event, payload);

        switch (payload.event) {
          case 'signIn':
            console.log('OAuth sign-in completed via Hub, redirecting to dashboard');
            if (hubUnsubscribe) hubUnsubscribe();
            router.push('/dashboard');
            break;
          case 'signIn_failure':
            console.error('OAuth sign-in failed:', payload.data);
            if (hubUnsubscribe) hubUnsubscribe();
            router.push('/auth/login?error=oauth_failed');
            break;
          case 'signInWithRedirect':
            console.log('OAuth redirect sign-in completed, redirecting to dashboard');
            if (hubUnsubscribe) hubUnsubscribe();
            router.push('/dashboard');
            break;
          case 'signInWithRedirect_failure':
            console.error('OAuth redirect sign-in failed:', payload.data);
            if (hubUnsubscribe) hubUnsubscribe();
            router.push('/auth/login?error=oauth_redirect_failed');
            break;
        }
      };

      hubUnsubscribe = Hub.listen('auth', hubListener);

      // Fallback: redirect to home after 10 seconds if no Hub event
      timeoutId = setTimeout(() => {
        console.log('OAuth callback: Timeout reached, redirecting to home');
        if (hubUnsubscribe) hubUnsubscribe();
        router.push('/');
      }, 10000);
    };

    handleOAuthCompletion();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (hubUnsubscribe) hubUnsubscribe();
    };
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground mb-4">Completing sign in...</p>
        <p className="text-sm text-muted-foreground">Please wait while we redirect you...</p>
      </div>
    </div>
  );
}
