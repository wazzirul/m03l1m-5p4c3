import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from '../components/SettingsLayout';
import { ProfileSettingsContentSkeleton } from '../components/SettingsContentSkeleton';

export default function ProfileSettingsLoading() {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout user={user} activeSectionId="profile">
          <ProfileSettingsContentSkeleton />
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
}
