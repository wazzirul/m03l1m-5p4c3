import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getServerUser, isAuthenticated, getServerAuthSession } from '@/lib/authServer';

export interface AuthUser {
  email: string;
  email_verified: string;
  name: string;
  sub: string;
}

export interface AuthGuardResult {
  user: AuthUser;
  isAuthenticated: true;
}

/**
 * Server-side authentication guard for protected pages
 * Automatically redirects to login if user is not authenticated
 */
export async function requireAuth(): Promise<AuthGuardResult> {
  try {
    const headersList = await headers();
    
    // Create a more complete request object that preserves the original context
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const url = `${protocol}://${host}`;
    
    const request = new NextRequest(url, {
      headers: Object.fromEntries(headersList.entries()),
    });
    const response = NextResponse.next();

    // Check if user is authenticated with improved session handling
    const session = await getServerAuthSession(request, response);
    if (!session?.tokens?.accessToken || !session?.tokens?.idToken) {
      console.log('Auth guard: No valid session found, redirecting to login');
      redirect('/auth/login?reason=auth-required');
    }

    // Verify token is not expired
    const now = Math.floor(Date.now() / 1000);
    const tokenExp = session.tokens.accessToken.payload.exp as number;
    if (tokenExp && tokenExp <= now) {
      console.log('Auth guard: Token expired, redirecting to login');
      redirect('/auth/login?reason=token-expired');
    }

    // Get user data with improved retry logic
    let serverUser = await getServerUser(request, response);
    let retries = 0;
    const maxRetries = 3;
    
    while ((!serverUser || !serverUser.attributes) && retries < maxRetries) {
      console.log(`Auth guard: Attempt ${retries + 1}/${maxRetries} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 100 * (retries + 1))); // Progressive delay
      serverUser = await getServerUser(request, response);
      retries++;
    }
    
    if (!serverUser || !serverUser.attributes) {
      console.log('Auth guard: Failed to get user data after all retries, redirecting to login');
      redirect('/auth/login?reason=user-data-unavailable');
    }

    return {
      user: serverUser.attributes as AuthUser,
      isAuthenticated: true,
    };
  } catch (error) {
    console.log('Auth guard error:', error);
    // Check if this is a redirect error (which is expected)
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error; // Re-throw redirect errors
    }
    redirect('/auth/login?reason=auth-error');
  }
}

/**
 * Check authentication without redirecting
 * Useful for conditional rendering or client-side checks
 */
export async function checkAuth(): Promise<{ user: AuthUser | null; isAuthenticated: boolean }> {
  try {
    const headersList = await headers();
    
    // Create a more complete request object that preserves the original context
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const url = `${protocol}://${host}`;
    
    const request = new NextRequest(url, {
      headers: Object.fromEntries(headersList.entries()),
    });
    const response = NextResponse.next();

    const authenticated = await isAuthenticated(request, response);
    if (!authenticated) {
      return { user: null, isAuthenticated: false };
    }

    const serverUser = await getServerUser(request, response);
    
    if (!serverUser || !serverUser.attributes) {
      return { user: null, isAuthenticated: false };
    }

    return {
      user: serverUser.attributes as AuthUser,
      isAuthenticated: true,
    };
  } catch (error) {
    console.log('Auth check error:', error);
    return { user: null, isAuthenticated: false };
  }
}
