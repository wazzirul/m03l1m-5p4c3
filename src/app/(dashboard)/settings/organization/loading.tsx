import AuthWrapper from '@/components/auth-wrapper';
import SettingsLayout from '../components/SettingsLayout';
import { OrganizationSettingsContentSkeleton } from '../components/SettingsContentSkeleton';

export default function OrganizationSettingsLoading() {
  return (
    <AuthWrapper>
      {(user) => (
        <SettingsLayout user={user} activeSectionId="organization">
          <OrganizationSettingsContentSkeleton />
        </SettingsLayout>
      )}
    </AuthWrapper>
  );
}
