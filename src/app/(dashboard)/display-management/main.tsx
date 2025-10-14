'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, lazy } from 'react';
import Link from 'next/link';
import { AuthUser } from '@/lib/auth-guard';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@phosphor-icons/react';
import { useTheme } from '@/contexts/ThemeContext';
import qrCodeDonation from '@/assets/images/donation/qr-code.png';
import { DisplayDataTable } from './components/dataTable';
import { Display } from './types/displayTypes';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';
const SampleVideo = '/sample-videos.mp4';

const DashboardHeader = dynamic(
  () => import('@/app/components/dashboardHeader'),
  {
    loading: () => <div className="h-12 bg-muted animate-pulse rounded" />,
  }
);

interface Props {
  user: AuthUser;
}

export default function Main({ user }: Props) {
  const { theme } = useTheme();

  // Action handlers for the data table
  const handleLivePreview = (display: Display) => {
    // Open live preview in new tab
    window.open(`/display/${display.displayCode}`, '_blank');
  };

  const handleEdit = (display: Display) => {
    // Navigate to edit page
    window.location.href = `/display-management/edit/${display.id}`;
  };

  const handleDelete = (display: Display) => {
    // Show confirmation dialog and delete
    if (
      window.confirm(
        `Are you sure you want to delete "${display.displayName}"?`
      )
    ) {
      console.log('Delete display:', display.id);
      // TODO: Implement actual delete functionality
      // This could involve calling an API to delete the display
      // and then refreshing the data or removing it from the local state
    }
  };

  const DisplayTemplate: Display[] = [
    {
      id: 'display-001',
      displayName: 'Main Lobby Display',
      displayCode: 'QWERTY1',
      layout: 'bottom',
      style: 1,
      templateContent: {
        orgName: 'MCC San Diego',
        mosqueName: 'San Diego Mosque',
        selectedContent: 'Next Prayer Times',
        colors: {
          themeColor: '#FCD29A',
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        },
      },
      status: 'active',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'display-002',
      displayName: 'Prayer Hall Display',
      displayCode: 'QWERTY2',
      layout: 'left',
      style: 3,
      templateContent: {
        orgName: 'MCC San Diego',
        mosqueName: 'San Diego Mosque',
        selectedContent: 'Announcements',
        mainContentData: {
          announcementData: {
            announcementType: 'text' as const,
            announcements: [
              {
                id: 'ann-001',
                title: 'Friday Khutbah Reminder',
                content:
                  'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
                video: SampleVideo,
                image: ImageMosque1,
                date_schedule_from: '2025-08-28',
                date_schedule_to: '2025-08-29',
                target_location: 'inside' as const,
                target_user: 'all' as const,
                created_at: '2025-08-20T09:30:00Z',
                updated_at: '2025-08-21T11:15:00Z',
              },
              {
                id: 'ann-002',
                title: 'Community Clean-up Day',
                content:
                  'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
                video: null,
                image: ImageMosque2,
                date_schedule_from: '2025-08-31',
                date_schedule_to: '2025-08-31',
                target_location: 'outside' as const,
                target_user: 'adult' as const,
                created_at: '2025-08-19T08:00:00Z',
                updated_at: '2025-08-19T08:00:00Z',
              },
              {
                id: 'ann-003',
                title: 'Eid al-Fitr',
                content: 'The Preyer Eid al-Fitr will take place on Sunday.',
                video: null,
                image: ImageMosque2,
                date_schedule_from: '2025-08-31',
                date_schedule_to: '2025-08-31',
                target_location: 'outside' as const,
                target_user: 'adult' as const,
                created_at: '2025-08-19T08:00:00Z',
                updated_at: '2025-08-19T08:00:00Z',
              },
            ],
          },
          imageData: null,
          videoData: null,
          quranData: null,
          backgroundColor: null,
          backgroundImage: null,
        },
        colors: {
          themeColor: '#0950A1',
          primaryColor: '#ffffff',
          secondaryColor: '#1A1A1A',
        },
      },
      status: 'active',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'display-003',
      displayName: 'Youth Center Screen',
      displayCode: 'QWERTY3',
      layout: 'right',
      style: 2,
      templateContent: {
        orgName: 'MCC San Diego',
        mosqueName: 'San Diego Mosque',
        selectedContent: 'Images',
        mainContentData: {
          announcementData: null,
          imageData: {
            image: ImageMosque3,
          },
          videoData: null,
          quranData: null,
          backgroundColor: null,
          backgroundImage: null,
        },
        colors: {
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        },
      },
      status: 'active',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'display-004',
      displayName: "Women's Area Display",
      displayCode: 'WOMENS1',
      layout: 'l-layout',
      style: 5,
      templateContent: {
        orgName: 'MCC San Diego',
        mosqueName: 'San Diego Mosque',
        selectedContent: 'Quran Verse',
        mainContentData: {
          announcementData: null,
          imageData: null,
          videoData: null,
          quranData: {
            quran: [
              {
                verse:
                  'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
                translation:
                  'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
              },
              {
                verse:
                  'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
                translation:
                  'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
              },
              {
                verse:
                  'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
                translation:
                  'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
              },
            ],
          },
          backgroundColor: null,
          backgroundImage: ImageMosque4,
        },
        subContentData: [
          {
            id: 'ann-001',
            title: 'Friday Khutbah Reminder',
            content:
              'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
            video: SampleVideo,
            image: ImageMosque1,
            date_schedule_from: '2025-08-28',
            date_schedule_to: '2025-08-29',
            target_location: 'inside' as const,
            target_user: 'all' as const,
            created_at: '2025-08-20T09:30:00Z',
            updated_at: '2025-08-21T11:15:00Z',
          },
          {
            id: 'ann-002',
            title: 'Community Clean-up Day',
            content:
              'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
            video: null,
            image: ImageMosque2,
            date_schedule_from: '2025-08-31',
            date_schedule_to: '2025-08-31',
            target_location: 'outside' as const,
            target_user: 'adult' as const,
            created_at: '2025-08-19T08:00:00Z',
            updated_at: '2025-08-19T08:00:00Z',
          },
          {
            id: 'ann-003',
            title: 'Eid al-Fitr',
            content: 'The Preyer Eid al-Fitr will take place on Sunday.',
            video: null,
            image: ImageMosque2,
            date_schedule_from: '2025-08-31',
            date_schedule_to: '2025-08-31',
            target_location: 'outside' as const,
            target_user: 'adult' as const,
            created_at: '2025-08-19T08:00:00Z',
            updated_at: '2025-08-19T08:00:00Z',
          },
        ],
        colors: {
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        },
      },
      status: 'inactive',
      created_at: '2025-08-19T14:20:00Z',
      updated_at: '2025-08-20T16:45:00Z',
    },
  ];
  return (
    <>
      <Suspense
        fallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}
      >
        <DashboardHeader
          title="Display Management"
          description="All displays are listed here"
          action={
            <div className="flex gap-2 items-center">
              <Link href="/display-management/add">
                <Button variant="default" className="cursor-pointer">
                  <PlusIcon className="h-4 w-4 text-white" />
                  Add New Display
                </Button>
              </Link>
            </div>
          }
          mobileAction={[
            {
              icon: <PlusIcon className="h-4 w-4 relative top-[1px]" />,
              label: 'Add New Display',
              href: '/display-management/add',
            },
          ]}
          footerShow={true}
          footerItems={[
            {
              label: 'Overview',
              href: '/display-management',
              active: true,
            },
            {
              label: 'Assets',
              href: '/display-management/assets',
              active: false,
            },
          ]}
        />
      </Suspense>

      <div className="mt-6">
        <DisplayDataTable
          data={DisplayTemplate}
          onLivePreview={handleLivePreview}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
