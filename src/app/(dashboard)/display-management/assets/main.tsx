'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useRouter } from 'next/navigation';
import { AuthUser } from '@/lib/auth-guard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@phosphor-icons/react';
import { useTheme } from '@/contexts/ThemeContext';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';
import { Asset } from './types/assetTypes';
import { AssetDataTable } from './components/dataTable';
const SampleVideo = '/sample-videos.mp4';

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
  const assetsStaticData: Asset[] = [
    // Static data moved up for proper initialization
    {
      id: 'asset-001',
      name: 'Outside Mosque',
      type: 'image',
      sourceUrl: ImageMosque1,
      fileSize: '2.1 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-002',
      name: 'Inside Mosque',
      type: 'image',
      sourceUrl: ImageMosque2,
      fileSize: '1.8 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-003',
      name: 'Mosque Interior',
      type: 'image',
      sourceUrl: ImageMosque3,
      fileSize: '2.3 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-004',
      name: 'Mosque Exterior',
      type: 'image',
      sourceUrl: ImageMosque4,
      fileSize: '1.9 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-005',
      name: 'Mosque Prayer Hall',
      type: 'image',
      sourceUrl: ImageMosque5,
      fileSize: '2.0 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-006',
      name: 'Mosque Video Tour',
      type: 'video',
      sourceUrl: SampleVideo,
      fileSize: '15.7 MB',
      dimensions: '1280 x 720',
      duration: '2:34',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
  ];

  const handleDelete = (asset: Asset) => {
    // Show confirmation and delete
    if (window.confirm(`Are you sure you want to delete "${asset.name}"?`)) {
      console.log('Delete asset:', asset.id);
      // TODO: Implement actual delete functionality
      // You would typically call an API here to delete the asset
    }
  };

  const handleSelectionChange = (selectedAssets: Asset[]) => {
    console.log('Selected assets:', selectedAssets);
    // TODO: You can handle bulk operations here
    // For example: show bulk action toolbar, update state, etc.
  };

  return (
    <>
      <Suspense
        fallback={
          <div className="h-12 bg-gray-100 animate-pulse rounded mb-6" />
        }
      >
        <DashboardHeader
          title="Assets Display"
          description="Manage your assets for the community"
          action={
            <div className="flex gap-2 items-center">
              <Link href="/display-management/assets/add">
                <Button variant="default" className="cursor-pointer">
                  <PlusIcon className="h-4 w-4 text-white" />
                  Add New Assets
                </Button>
              </Link>
            </div>
          }
          mobileAction={[
            {
              icon: <PlusIcon className="h-4 w-4 relative top-[1px]" />,
              label: 'Add New Assets',
              href: '/display-management/assets/add',
            },
          ]}
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
              active: true,
            },
          ]}
        />
      </Suspense>

      {/* Assets Data Table */}
      <div className="container mx-auto py-6">
        <AssetDataTable
          data={assetsStaticData}
          onDelete={handleDelete}
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </>
  );
}
