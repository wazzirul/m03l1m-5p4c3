'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { AuthUser } from '@/lib/auth-guard';
import SettingsSidebar from './SettingsSidebar';
import { settingsSections } from '../main';

const DashboardHeader = dynamic(
  () => import('@/app/components/dashboardHeader'),
  {
    loading: () => <div className="h-12 bg-muted animate-pulse rounded" />,
  }
);

interface Props {
  user: AuthUser;
  activeSectionId: string;
  children: React.ReactNode;
  headerFallback?: React.ReactNode;
}

export default function SettingsLayout({
  user,
  activeSectionId,
  children,
  headerFallback = (
    <div className="h-12 bg-muted animate-pulse rounded mb-6" />
  ),
}: Props) {
  const activeSection = settingsSections.find((s) => s.id === activeSectionId);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Suspense fallback={headerFallback}>
          <DashboardHeader
            title="Settings"
            description="Manage your account details, organization, and security settings"
          />
        </Suspense>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          {/* Sidebar */}
          <div className="block lg:hidden overflow-x-auto pb-4">
            <SettingsSidebar activeSectionId={activeSectionId} />
          </div>
          <div className="hidden lg:block">
            <SettingsSidebar activeSectionId={activeSectionId} />
          </div>

          {/* Content */}
          <div className="flex flex-col min-h-[calc(100vh-200px)]">
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-card border border-border rounded-xl shadow-sm px-6 py-6">
                <div className="border-b border-border pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {activeSection?.title}
                  </h2>
                  <p className="text-muted-foreground">{activeSection?.description}</p>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
