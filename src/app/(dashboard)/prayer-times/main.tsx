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

const PrayerTimeDataTable = dynamic(
  () =>
    import('./components/dataTable').then((mod) => ({
      default: mod.PrayerTimeDataTable,
    })),
  {
    loading: () => <div className="h-64 bg-muted animate-pulse rounded" />,
  }
);

import { AuthUser } from '@/lib/auth-guard';
import { Button } from '@/components/ui/button';
import { DownloadIcon, ArrowSquareInIcon } from '@phosphor-icons/react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import router from 'next/router';

import { usePrayerTimesData } from './hooks/usePrayerTimesData';

interface Props {
  user: AuthUser;
}

export default function Main({ user }: Props) {
  const { data, isLoading, error } = usePrayerTimesData();
  const { theme } = useTheme();

  return (
    <>
      <Suspense
        fallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}
      >
        <DashboardHeader
          title="Prayer Times"
          description="All prayer times are listed here"
          action={
            <div className="flex gap-2 items-center">
              <Link
                href="https://docs.google.com/spreadsheets/d/1o9dngtGJbfkFGZK_M7xdlo2PtRuQknGEQU3FxpiPVbg/copy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="cursor-pointer">
                  <DownloadIcon className="h-4 w-4" weight="bold" />
                  Download Our Template
                </Button>
              </Link>
              <Link href="/prayer-times/import">
                <Button variant="default" className="cursor-pointer">
                  <ArrowSquareInIcon className="h-4 w-4" weight="bold" />
                  Import Your Template
                </Button>
              </Link>
            </div>
          }
          mobileAction={[
            {
              icon: <DownloadIcon className="h-4 w-4 relative top-[1px]" />,
              label: 'Download Our Template',
              href: 'https://docs.google.com/spreadsheets/d/1o9dngtGJbfkFGZK_M7xdlo2PtRuQknGEQU3FxpiPVbg/copy',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            {
              icon: (
                <ArrowSquareInIcon className="h-4 w-4 relative top-[1px]" />
              ),
              label: 'Import Your Template',
              href: '/prayer-times/import',
            },
          ]}
        />
      </Suspense>

      <div className="space-y-6">
        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">
              Loading prayer times...
            </span>
          </div>
        ) : (
          <Suspense
            fallback={<div className="h-64 bg-muted animate-pulse rounded" />}
          >
            <PrayerTimeDataTable data={data} />
          </Suspense>
        )}
      </div>
    </>
  );
}
