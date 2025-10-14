  import { Metadata } from 'next';
  import { Suspense } from 'react';
  import AuthWrapper from '@/components/auth-wrapper';
  import SettingsLayout from '../components/SettingsLayout';
  import SecuritySettingsContent from '../components/SecuritySettingsContent';
  import { SecuritySettingsContentSkeleton } from '../components/SettingsContentSkeleton';

  export const metadata: Metadata = {
    title: 'Security Settings | Muslim Spaces',
    description: 'Update your password and security settings',
  };

  const SecuritySettingsPage = async () => {
    return (
      <AuthWrapper>
        {(user) => (
          <SettingsLayout user={user} activeSectionId="security" headerFallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}>
            <Suspense fallback={<SecuritySettingsContentSkeleton />}>
              <SecuritySettingsContent />
            </Suspense>
          </SettingsLayout>
        )}
      </AuthWrapper>
    );
  };

  export default SecuritySettingsPage;
