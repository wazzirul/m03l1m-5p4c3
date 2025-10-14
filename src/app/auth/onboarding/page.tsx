import { Metadata } from 'next';
import Main from './main';

export const metadata: Metadata = {
  title: 'Onboarding | Muslim Spaces',
  description: 'Connecting Communities',
};

const Page = async () => {
  return <Main />;
};

export default Page;
