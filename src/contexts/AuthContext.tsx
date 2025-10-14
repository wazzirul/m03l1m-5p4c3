'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, fetchUserAttributes, fetchAuthSession } from '@aws-amplify/auth';
import '@/lib/amplify';

interface AuthUser {
  username: string;
  userId: string;
  attributes: Record<string, any>;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  refreshAuth: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const refreshAuth = async () => {
    try {
      setIsLoading(true);
      
      // Check if we have a valid session first
      const session = await fetchAuthSession();
      if (!session.tokens?.accessToken || !session.tokens?.idToken) {
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      // Check if token is expired
      const now = Math.floor(Date.now() / 1000);
      const tokenExp = session.tokens.accessToken.payload.exp as number;
      if (tokenExp && tokenExp <= now) {
        console.log('Token expired, clearing auth state');
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      const currentUser = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      
      setUser({
        username: currentUser.username,
        userId: currentUser.userId,
        attributes,
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.log('Auth refresh error:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { signOut: amplifySignOut } = await import('@aws-amplify/auth');
      
      // Use global signout for federated users (Google/Facebook)
      await amplifySignOut({ global: true });
      
      setUser(null);
      setIsAuthenticated(false);
      
      // Clear any cached auth state
      localStorage.clear();
      sessionStorage.clear();
      
      // Redirect to login
      window.location.href = '/auth/login?reason=signed-out';
    } catch (error) {
      console.error('Sign out error:', error);
      
      // Clear state even if signOut fails
      setUser(null);
      setIsAuthenticated(false);
      localStorage.clear();
      sessionStorage.clear();
      
      // Force redirect even if signOut fails
      window.location.href = '/auth/login?reason=sign-out-error';
    }
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated,
    refreshAuth,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
