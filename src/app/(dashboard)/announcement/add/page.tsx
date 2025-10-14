import { Metadata } from 'next';
import AuthWrapper from '@/components/auth-wrapper';
import Main from './main';

export const metadata: Metadata = {
  title: 'Add Announcement | Muslim Spaces',
  description: 'Connecting Communities',
};

// Force dynamic rendering for authentication
export const dynamic = 'force-dynamic';

const Page = async () => {
  return <AuthWrapper>{(user) => <Main user={user} />}</AuthWrapper>;
};

export default Page;
