import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Skip auth check for auth pages, API routes, and static files
  const { pathname, searchParams } = request.nextUrl;
  
  // Allow home page and OAuth callbacks
  if (
    pathname.startsWith('/auth/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico' ||
    pathname === '/callback' ||
    pathname === '/' || // Allow access to home page
    (pathname === '/' && searchParams.has('code')) // Allow OAuth callbacks to home page
  ) {
    return response;
  }

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {
          forceRefresh: false, // Don't force refresh in middleware to avoid delays
        });
        
        // Check if we have valid tokens
        if (session.tokens?.accessToken && session.tokens?.idToken) {
          const now = Math.floor(Date.now() / 1000);
          const tokenExp = session.tokens.accessToken.payload.exp as number;
          
          // Only consider authenticated if token is not expired
          if (tokenExp && tokenExp > now) {
            return true;
          }
          
          console.log('Token expired in middleware, user needs to re-authenticate');
          return false;
        }
        
        return false;
      } catch (error) {
        console.log('Middleware auth check error:', error);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  // Redirect to login if not authenticated, but avoid redirect loops
  const loginUrl = new URL('/auth/login', request.url);
  if (pathname !== '/auth/login') {
    loginUrl.searchParams.set('reason', 'auth-required');
    loginUrl.searchParams.set('redirect', pathname);
  }
  
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication pages)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
  ],
};
