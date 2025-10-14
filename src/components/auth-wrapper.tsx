import { ReactNode } from 'react';
import { requireAuth, AuthUser } from '@/lib/auth-guard';

interface AuthWrapperProps {
  children: (user: AuthUser) => ReactNode;
}

/**
 * Server component wrapper that ensures authentication before rendering children
 * Usage: <AuthWrapper>{(user) => <YourComponent user={user} />}</AuthWrapper>
 */
export default async function AuthWrapper({ children }: AuthWrapperProps) {
  const { user } = await requireAuth();
  return <>{children(user)}</>;
}
