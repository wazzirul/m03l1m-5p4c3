'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useRouter } from 'next/navigation';
import { AuthUser } from '@/lib/auth-guard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@phosphor-icons/react';
import { AssetUploadForm } from './components/AssetUploadForm';

const DashboardHeader = dynamic(
  () => import('@/app/components/dashboardHeader'),
  {
    loading: () => <div className="h-12 bg-gray-100 animate-pulse rounded" />,
  }
);

interface Props {
  user: AuthUser;
}

export default function Main({ user }: Props) {

  return (
    <>
      <Suspense
        fallback={
          <div className="h-12 bg-gray-100 animate-pulse rounded mb-6" />
        }
      >
        <DashboardHeader
          title="Add Assets Display"
          description="Upload and manage your assets for the community"
          footerShow={true}
          footerItems={[
            {
              label: 'Overview',
              href: '/display-management',
              active: false,
            },
            {
              label: 'Assets',
              href: '/display-management/assets',
              active: false,
            },
          ]}
        />
      </Suspense>

      {/* Asset Upload Form */}
      <AssetUploadForm />
    </>
  );
}
