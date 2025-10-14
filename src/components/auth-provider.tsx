'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, fetchUserAttributes } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import '@/lib/amplify';

interface User {
  userId: string;
  username: string;
  attributes?: Record<string, any>;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  const refreshUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      
      setUser({
        userId: currentUser.userId,
        username: currentUser.username,
        attributes,
      });
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if this is an OAuth callback
    const isOAuthCallback = searchParams.get('code') !== null;
    
    // Initial user check
    refreshUser();

    // Listen for auth events from Amplify Hub (based on AWS docs)
    const hubListener = (data: any) => {
      const { payload } = data;
      console.log('Auth Hub Event:', payload.event, payload);

      switch (payload.event) {
        case 'signIn':
          console.log('User signed in via Hub');
          refreshUser();
          break;
        case 'signOut':
          console.log('User signed out via Hub');
          setUser(null);
          break;
        case 'signedIn':
          console.log('User signed in (signedIn event)');
          refreshUser();
          // If this is an OAuth callback, redirect to dashboard
          if (isOAuthCallback) {
            console.log('OAuth callback detected, redirecting to dashboard');
            router.replace('/dashboard');
          }
          break;
        case 'signInWithRedirect':
          console.log('OAuth sign-in redirect completed');
          refreshUser();
          // Redirect to dashboard after OAuth completes
          if (isOAuthCallback) {
            console.log('OAuth redirect completed, redirecting to dashboard');
            router.replace('/dashboard');
          }
          break;
        case 'signInWithRedirect_failure':
          console.error('OAuth sign-in failed:', payload.data);
          if (isOAuthCallback) {
            router.replace('/auth/login?error=oauth_redirect_failed');
          }
          break;
        case 'signIn_failure':
          console.error('Sign-in failed:', payload.data);
          break;
        case 'customOAuthState':
          console.log('Custom OAuth state received:', payload.data);
          break;
        default:
          break;
      }
    };

    // Subscribe to auth events
    const unsubscribe = Hub.listen('auth', hubListener);

    // Cleanup subscription
    return () => unsubscribe();
  }, [router, searchParams]);

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
