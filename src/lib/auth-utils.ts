import { redirect } from 'next/navigation';

/**
 * Redirects to access denied page
 */
export function redirectToAccessDenied() {
  redirect('/access-denied');
}

/**
 * Check if user has required permissions and redirect if not
 * @param hasPermission - boolean indicating if user has permission
 * @param redirectPath - optional custom redirect path (defaults to /access-denied)
 */
export function requirePermission(hasPermission: boolean, redirectPath?: string) {
  if (!hasPermission) {
    redirect(redirectPath || '/access-denied');
  }
}

/**
 * Auth guard hook for client components
 * @param isAuthenticated - boolean indicating if user is authenticated
 * @param hasPermission - optional boolean for specific permissions
 */
export function useAuthGuard(isAuthenticated: boolean, hasPermission?: boolean) {
  if (typeof window !== 'undefined') {
    if (!isAuthenticated) {
      window.location.href = '/access-denied';
      return;
    }
    
    if (hasPermission !== undefined && !hasPermission) {
      window.location.href = '/access-denied';
      return;
    }
  }
}
