import { Suspense } from 'react';
import AuthWrapper from '@/components/auth-wrapper';
import { LayoutSwitcher } from '@/components/layout-switcher';

export const dynamic = 'force-dynamic';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthWrapper>
      {(user) => (
        <LayoutSwitcher user={user}>
          {children}
        </LayoutSwitcher>
      )}
    </AuthWrapper>
  );
}
