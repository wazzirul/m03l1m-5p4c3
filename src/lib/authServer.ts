import {
  fetchAuthSession,
  getCurrentUser,
  fetchUserAttributes,
} from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils';
import { NextRequest, NextResponse } from 'next/server';

export async function getServerAuthSession(
  request: NextRequest,
  response: NextResponse
) {
  return await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        // First try without refresh
        let session = await fetchAuthSession(contextSpec, {
          forceRefresh: false,
        });

        // Check if we have valid tokens
        if (session.tokens?.accessToken && session.tokens?.idToken) {
          const now = Math.floor(Date.now() / 1000);
          const tokenExp = session.tokens.accessToken.payload.exp as number;

          // If token is close to expiry (within 5 minutes), try to refresh
          if (tokenExp && tokenExp < now + 300) {
            console.log('Token close to expiry, attempting refresh...');
            try {
              session = await fetchAuthSession(contextSpec, {
                forceRefresh: true,
              });
              console.log('Token refresh successful');
            } catch (refreshError) {
              console.log('Token refresh failed:', refreshError);
              // If refresh fails, check if current token is still valid
              if (tokenExp < now) {
                console.log('Token expired and refresh failed, returning null');
                return null;
              }
              // If current token is still valid, continue with it
              console.log('Using existing token despite refresh failure');
            }
          }
        }

        return session;
      } catch (error) {
        console.log('Server auth session error:', error);
        return null;
      }
    },
  });
}

export async function getServerUser(
  request: NextRequest,
  response: NextResponse
) {
  return await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const user = await getCurrentUser(contextSpec);
        const attributes = await fetchUserAttributes(contextSpec);
        return { user, attributes };
      } catch (error) {
        console.log('Server user error:', error);
        return null;
      }
    },
  });
}

export async function isAuthenticated(
  request: NextRequest,
  response: NextResponse
): Promise<boolean> {
  const session = await getServerAuthSession(request, response);
  return !!(session?.tokens?.accessToken && session?.tokens?.idToken);
}
