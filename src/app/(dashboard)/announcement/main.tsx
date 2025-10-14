'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';

import { AuthUser } from '@/lib/auth-guard';
import { type Announcement } from './components/dataTable';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

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

// Import the skeleton component statically for the loading state
import { AnnouncementDataTableSkeleton } from './components/dataTableSkeleton';

const AnnouncementDataTable = dynamic(
  () =>
    import('./components/dataTable').then((mod) => ({
      default: mod.AnnouncementDataTable,
    })),
  {
    loading: () => <AnnouncementDataTableSkeleton />,
    ssr: false,
  }
);

// Lazy load the delete dialog component
const DeleteDialog = lazy(() =>
  import('./components/deleteDialog').then((mod) => ({
    default: mod.DeleteDialog,
  }))
);

interface Props {
  user: AuthUser;
}

export default function Main({ user }: Props) {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const [toastSuccessAppeared, setToastSuccessAppeared] = useState<
    null | boolean
  >(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] =
    useState<Announcement | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const success = searchParams.get('success');

    if (
      success === 'created' ||
      success === 'updated' ||
      success === 'deleted'
    ) {
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      window.history.replaceState({}, '', url.toString());

      if (toastSuccessAppeared !== true) {
        const isUpdate = success === 'updated';
        const isDelete = success === 'deleted';
        toast.success(
          isDelete
            ? 'Announcement Deleted!'
            : isUpdate
            ? 'Announcement Updated!'
            : 'Announcement Created!',
          {
            description: isDelete
              ? 'The announcement has been successfully deleted.'
              : isUpdate
              ? 'Your announcement has been successfully updated.'
              : 'Your announcement has been successfully created.',
            duration: 4000,
          }
        );
      }

      setToastSuccessAppeared(true);
    }
  }, [searchParams]);

  const announcementStaticData: Announcement[] = [
    {
      id: 'ann-001',
      title: 'Friday Khutbah Reminder',
      content:
        'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
      video: SampleVideo,
      image: ImageMosque1,
      date_schedule_from: '2025-08-28',
      date_schedule_to: '2025-08-29',
      target_location: 'inside',
      target_user: 'all',
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
      target_location: 'outside',
      target_user: 'adult',
      created_at: '2025-08-19T08:00:00Z',
      updated_at: '2025-08-19T08:00:00Z',
    },
    {
      id: 'ann-003',
      title: 'Quran Recitation Class',
      content:
        'Weekly Quran recitation class every Saturday evening for teens.',
      video: SampleVideo,
      image: ImageMosque3,
      date_schedule_from: null,
      date_schedule_to: null,
      target_location: 'inside',
      target_user: 'teen',
      created_at: '2025-08-18T14:22:00Z',
      updated_at: '2025-08-18T14:22:00Z',
    },
    {
      id: 'ann-004',
      title: 'Charity Bazaar',
      content:
        'Support our charity bazaar! All proceeds go to orphan sponsorship programs.',
      video: null,
      image: ImageMosque4,
      date_schedule_from: '2025-09-05',
      date_schedule_to: '2025-09-07',
      target_location: 'outside',
      target_user: 'all',
      created_at: '2025-08-15T12:45:00Z',
      updated_at: '2025-08-16T10:00:00Z',
    },
    {
      id: 'ann-005',
      title: 'Children Islamic Storytelling',
      content:
        'Fun storytelling session for kids after Dhuhr prayer every Saturday.',
      video: SampleVideo,
      image: ImageMosque5,
      date_schedule_from: null,
      date_schedule_to: null,
      target_location: 'inside',
      target_user: 'child',
      created_at: '2025-08-14T07:50:00Z',
      updated_at: '2025-08-14T07:50:00Z',
    },
    {
      id: 'ann-006',
      title: 'Monthly Donor Appreciation',
      content:
        'We thank all donors for their contributions. May Allah reward you abundantly.',
      video: null,
      image: ImageMosque1,
      date_schedule_from: null,
      date_schedule_to: null,
      target_location: 'outside',
      target_user: 'all',
      created_at: '2025-08-10T18:25:00Z',
      updated_at: '2025-08-12T09:15:00Z',
    },
    {
      id: 'ann-007',
      title: 'Youth Sports Tournament',
      content:
        'Join the mosque’s football tournament for youth aged 13–19. Register before September 1st.',
      video: SampleVideo,
      image: ImageMosque2,
      date_schedule_from: '2025-09-10',
      date_schedule_to: '2025-09-12',
      target_location: 'outside',
      target_user: 'teen',
      created_at: '2025-08-09T13:40:00Z',
      updated_at: '2025-08-09T13:40:00Z',
    },
    {
      id: 'ann-008',
      title: 'New Prayer Schedule',
      content:
        'Updated prayer schedule for September is now available at the mosque notice board and website.',
      video: null,
      image: ImageMosque3,
      date_schedule_from: null,
      date_schedule_to: null,
      target_location: 'inside',
      target_user: 'all',
      created_at: '2025-08-08T06:15:00Z',
      updated_at: '2025-08-08T06:15:00Z',
    },
    {
      id: 'ann-009',
      title: 'Tahajjud Night Gathering',
      content:
        'Special Tahajjud night prayers this Saturday, followed by a short lecture and breakfast.',
      video: SampleVideo,
      image: ImageMosque4,
      date_schedule_from: '2025-08-30',
      date_schedule_to: '2025-08-30',
      target_location: 'inside',
      target_user: 'adult',
      created_at: '2025-08-05T21:00:00Z',
      updated_at: '2025-08-05T21:00:00Z',
    },
    {
      id: 'ann-010',
      title: 'Teen Islamic Camp',
      content:
        'Register now for the 3-day Islamic camp designed for teenagers. Activities include Quran study, outdoor games, and workshops.',
      video: SampleVideo,
      image: ImageMosque5,
      date_schedule_from: '2025-09-15',
      date_schedule_to: '2025-09-17',
      target_location: 'outside',
      target_user: 'teen',
      created_at: '2025-08-01T15:30:00Z',
      updated_at: '2025-08-02T09:45:00Z',
    },
  ];

  // Initialize announcements data with loading simulation
  useEffect(() => {
    const loadData = async () => {
      setIsLoadingData(true);

      // Simulate API loading time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAnnouncements(announcementStaticData);
      setIsLoadingData(false);
    };

    loadData();
  }, []);

  // Delete functions
  const handleDeleteClick = (announcement: Announcement) => {
    setAnnouncementToDelete(announcement);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!announcementToDelete) return;

    try {
      // TODO: Implement API call to delete announcement
      console.log('Deleting announcement:', announcementToDelete.id);

      // Remove from local state
      setAnnouncements((prev) =>
        prev.filter((ann) => ann.id !== announcementToDelete.id)
      );

      // Close dialog
      setDeleteDialogOpen(false);
      setAnnouncementToDelete(null);

      // Show success toast
      toast.success('Announcement Deleted!', {
        description: 'The announcement has been successfully deleted.',
        duration: 4000,
      });
    } catch (error) {
      console.error('Failed to delete announcement:', error);
      toast.error('Failed to Delete Announcement', {
        description: 'Something went wrong. Please try again.',
        duration: 4000,
      });
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setAnnouncementToDelete(null);
  };

  return (
    <>
      <Suspense
        fallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}
      >
        <DashboardHeader
          title="Announcement"
          description="All announcement are listed here"
          action={
            <Link href="/announcement/add">
              <Button variant="default" className="cursor-pointer">
                <PlusIcon className="h-4 w-4" />
                Add Announcement
              </Button>
            </Link>
          }
          mobileAction={[
            {
              icon: <PlusIcon className="h-4 w-4 relative top-[1px]" />,
              label: 'Add Announcement',
              href: '/announcement/add',
            },
          ]}
        />
      </Suspense>

      {isLoadingData ? (
        <AnnouncementDataTableSkeleton />
      ) : (
        <AnnouncementDataTable
          data={announcements}
          onDelete={handleDeleteClick}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && (
        <Suspense fallback={null}>
          <DeleteDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            announcement={announcementToDelete}
            onConfirm={handleDeleteConfirm}
            onCancel={handleDeleteCancel}
          />
        </Suspense>
      )}
    </>
  );
}
