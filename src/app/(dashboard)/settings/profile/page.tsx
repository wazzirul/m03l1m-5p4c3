import { Metadata } from 'next';
import { Suspense } from 'react';
import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from '../components/SettingsLayout';
import ProfileSettingsContent from '../components/ProfileSettingsContent';
import { ProfileSettingsContentSkeleton } from '../components/SettingsContentSkeleton';

export const metadata: Metadata = {
  title: 'Profile Settings | Muslim Spaces',
  description: 'Manage your personal information and login details',
};

const ProfileSettingsPage = async () => {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout user={user} activeSectionId="profile" headerFallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}>
          <Suspense fallback={<ProfileSettingsContentSkeleton />}>
            <ProfileSettingsContent user={user} />
          </Suspense>
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
};

export default ProfileSettingsPage;
