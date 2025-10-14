'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { AuthUser } from '@/lib/auth-guard';
import SettingsSidebar from './components/SettingsSidebar';
import ProfileSettingsContent from './components/ProfileSettingsContent';
import GeneralSettingsContent from './components/GeneralSettingsContent';
import OrganizationSettingsContent from './components/OrganizationSettingsContent';
import SecuritySettingsContent from './components/SecuritySettingsContent';

const DashboardHeader = dynamic(
  () => import('@/app/components/dashboardHeader'),
  {
    loading: () => <div className="h-12 bg-muted animate-pulse rounded" />,
  }
);

interface Props {
  user: AuthUser;
}

export const settingsSections = [
  {
    id: 'general',
    title: 'General',
    description: 'Settings and options for your application.',
  },
  {
    id: 'profile',
    title: 'Profile',
    description: 'Your personal information and login details',
  },
  {
    id: 'organization',
    title: 'Organization',
    description: 'Manage your mosque or organization profile',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Update your password',
  },
];

export default function SettingsMain({ user }: Props) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Suspense
          fallback={
            <div className="h-12 bg-muted animate-pulse rounded mb-6" />
          }
        >
          <DashboardHeader
            title="Settings"
            description="Manage your account details, organization, and security settings"
          />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          {/* Sidebar */}
          <div className="block overflow-x-auto">
            <SettingsSidebar activeSectionId="" />
          </div>

          {/* Content */}
          <div className="flex flex-col min-h-[calc(100vh-200px)]">
            <div className="flex-1 flex flex-col gap-8">
              {settingsSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-card border border-border rounded-xl shadow-sm px-6 py-6 scroll-mt-24"
                >
                  <div className="border-b border-border pb-4 mb-6">
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>

                  {/* Section Content */}
                  {section.id === 'general' && <GeneralSettingsContent />}
                  {section.id === 'profile' && (
                    <ProfileSettingsContent user={user} />
                  )}
                  {section.id === 'organization' && (
                    <OrganizationSettingsContent />
                  )}
                  {section.id === 'security' && <SecuritySettingsContent />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
