'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const SampleVideo = '/sample-videos.mp4';

const DashboardHeader = dynamic(
  () => import('@/app/components/dashboardHeader'),
  {
    loading: () => <div className="h-12 bg-muted animate-pulse rounded" />,
  }
);

const ImportForm = dynamic(
  () => import('./components/importForm'),
  {
    loading: () => <div className="h-64 bg-muted animate-pulse rounded" />,
  }
);


import { AuthUser } from '@/lib/auth-guard';
import { Button } from '@/components/ui/button';
import { DownloadIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import router from 'next/router';


interface Props {
  user: AuthUser;
}

export default function Main({ user }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <Suspense
        fallback={
          <div className="h-12 bg-muted animate-pulse rounded mb-6" />
        }
      >
        <DashboardHeader
          title="Import Prayer Times"
          description="Here you can import prayer times using our template"
          action={
            <div className="flex gap-2 items-center">
            <Link href="/prayer-times">
              <Button
                variant="default"
                className="cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <ArrowLeftIcon className="h-4 w-4" weight='bold' />
                Back to Prayer Times
              </Button>
            </Link>
            </div>
          }
          mobileAction={[
            {
              icon: <ArrowLeftIcon className="h-4 w-4 relative top-[1px]" />,
              label: 'Back to Prayer Times',
              href: '/prayer-times/',
            },
          ]}
        />
      </Suspense>

      <div className="space-y-6">
        <Suspense
          fallback={
            <div className="h-96 bg-muted animate-pulse rounded" />
          }
        >
          <ImportForm />
        </Suspense>
      </div>
    </>
  );
}