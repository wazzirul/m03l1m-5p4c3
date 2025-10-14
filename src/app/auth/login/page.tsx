import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/authServer';
import Main from './main';

export const metadata: Metadata = {
  title: 'Login | Muslim Spaces',
  description: 'Connecting Communities',
};

const Page = async () => {
  const headersList = await headers();
  const request = new NextRequest('http://localhost:3000/auth/login', {
    headers: Object.fromEntries(headersList.entries()),
  });
  const response = NextResponse.next();

  const authed = await isAuthenticated(request, response);
  if (authed) {
    redirect('/dashboard');
  }

  return <Main />;
};

export default Page;
