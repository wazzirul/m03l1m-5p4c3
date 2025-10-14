import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/authServer';
import OAuthHandler from '@/components/oauth-handler';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  // Check if this is an OAuth callback (has code parameter)
  const params = await searchParams;
  const hasOAuthCode = params.code !== undefined;

  if (hasOAuthCode) {
    // This is an OAuth callback, let client-side handle it
    return <OAuthHandler />;
  }

  // For regular home page access, check authentication
  const headersList = await headers();
  const request = new NextRequest('http://localhost:3000/', {
    headers: Object.fromEntries(headersList.entries()),
  });
  const response = NextResponse.next();

  const authed = await isAuthenticated(request, response);

  if (authed) {
    redirect('/dashboard');
  }

  redirect('/auth/login');
}
