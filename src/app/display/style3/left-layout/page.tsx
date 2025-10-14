import { Metadata } from 'next';
import Main from './main';

export const metadata: Metadata = {
  title: 'Dark Gradient Overlay - Left Layout Display | Muslim Spaces',
  description: 'Connecting Communities',
};

// Force dynamic rendering for authentication
export const dynamic = 'force-dynamic';

const Page = async () => {
  return <Main />;
};

export default Page;
