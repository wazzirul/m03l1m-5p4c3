import { Metadata } from 'next';
import { Suspense } from 'react';
import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from './components/SettingsLayout';
import GeneralSettingsContent from './components/GeneralSettingsContent';
import { GeneralSettingsContentSkeleton } from './components/SettingsContentSkeleton';

export const metadata: Metadata = {
  title: 'Settings | Muslim Spaces',
  description: 'Connecting Communities',
};

const Page = async () => {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout user={user} activeSectionId="general">
          <Suspense fallback={<GeneralSettingsContentSkeleton />}>
            <GeneralSettingsContent />
          </Suspense>
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
};

export default Page;
