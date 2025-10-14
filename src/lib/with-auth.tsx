import { ComponentType } from 'react';
import { Metadata } from 'next';
import { requireAuth, AuthUser } from '@/lib/auth-guard';

interface WithAuthOptions {
  metadata?: Metadata;
}

/**
 * Higher-Order Component for protected pages
 * Automatically handles authentication and passes user data to the wrapped component
 */
export function withAuth<P extends { user: AuthUser }>(
  WrappedComponent: ComponentType<P>,
  options?: WithAuthOptions
) {
  const AuthenticatedPage = async (props: Omit<P, 'user'>) => {
    const { user } = await requireAuth();
    
    return <WrappedComponent {...(props as P)} user={user} />;
  };

  // Set display name for debugging
  AuthenticatedPage.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

  return AuthenticatedPage;
}

/**
 * Utility to create protected page with metadata
 */
export function createProtectedPage<P extends { user: AuthUser }>(
  Component: ComponentType<P>,
  metadata: Metadata
) {
  const ProtectedPage = withAuth(Component);
  
  return {
    default: ProtectedPage,
    metadata,
  };
}
