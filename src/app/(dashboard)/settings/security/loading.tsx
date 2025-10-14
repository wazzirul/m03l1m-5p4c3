import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from '../components/SettingsLayout';
import { SecuritySettingsContentSkeleton } from '../components/SettingsContentSkeleton';

export default function SecuritySettingsLoading() {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout user={user} activeSectionId="security">
          <SecuritySettingsContentSkeleton />
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
}
