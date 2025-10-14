import { Metadata } from 'next';
import { Suspense } from 'react';
import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from '../components/SettingsLayout';
import OrganizationSettingsContent from '../components/OrganizationSettingsContent';
import { OrganizationSettingsContentSkeleton } from '../components/SettingsContentSkeleton';

export const metadata: Metadata = {
  title: 'Organization Settings | Muslim Spaces',
  description: 'Manage your mosque or organization profile',
};

const OrganizationSettingsPage = async () => {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout
          user={user}
          activeSectionId="organization"
          headerFallback={
            <div className="h-12 bg-muted animate-pulse rounded mb-6" />
          }
        >
          <Suspense fallback={<OrganizationSettingsContentSkeleton />}>
            <OrganizationSettingsContent />
          </Suspense>
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
};

export default OrganizationSettingsPage;
