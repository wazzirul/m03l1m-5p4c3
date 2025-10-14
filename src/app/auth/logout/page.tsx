import { redirect } from 'next/navigation';

const Page = async () => {
  // Immediate redirect to login - let client handle logout
  redirect('/auth/login?reason=logout-requested');
};

export default Page;
