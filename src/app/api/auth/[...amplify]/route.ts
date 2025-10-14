import { createAuthRouteHandlers } from '@/lib/amplifyServerUtils';

export const { GET, POST } = createAuthRouteHandlers({
  redirectOnSignInComplete: '/auth/callback',
  redirectOnSignOutComplete: '/auth/login?reason=signed-out',
});
