'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { toast } from 'sonner';
import { AuthUser } from '@/lib/auth-guard';
import { useTheme } from '@/contexts/ThemeContext';
// Lazy load AnnouncementForm
const AnnouncementForm = dynamic(
  () => import('../../components/form').then(mod => ({ default: mod.AnnouncementForm })),
  {
    ssr: false,
  }
);
import { type Announcement } from '../../components/dataTable';


import DashboardHeader from '@/app/components/dashboardHeader';

interface Props {
  user: AuthUser;
  announcementId: string;
  announcement?: Announcement;
}

export default function Main({ user, announcementId, announcement }: Props) {
  const { theme } = useTheme();
  const { router } = useProgress();

  // Use server-side fetched data instead of static data
  const announcementToEdit = announcement;

  const handleSubmit = async (
    data: Omit<Announcement, 'id' | 'created_at' | 'updated_at'>
  ) => {
    try {
      // TODO: Implement API call to update announcement
      console.log('Updating announcement:', { id: announcementId, ...data });

      // Show success toast
      toast.success('Announcement Updated Successfully', {
        description: 'The announcement has been updated.',
        duration: 4000,
      });

      // Redirect with success parameter
      router.push('/announcement?success=updated');
    } catch (error) {
      console.error('Failed to update announcement:', error);

      // Show error toast
      toast.error('Failed to Update Announcement', {
        description: 'Something went wrong. Please try again.',
        duration: 4000,
      });
    }
  };

  const handleCancel = () => {
    router.push('/announcement');
  };

  // Handle case where announcement is not found
  if (!announcementToEdit) {
    return (
      <>
        <DashboardHeader
          title="Announcement Not Found"
          description="The requested announcement could not be found"
        />

        <div className="bg-card border border-border rounded-md shadow-sm p-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Announcement with ID "{announcementId}" not found.</p>
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-primary-foreground rounded hover:opacity-90"
              style={{ backgroundColor: theme.primary }}
            >
              Back to Announcements
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardHeader
        title="Edit Announcement"
        description="Update the announcement details"
      />

      <div className="bg-card border border-border rounded-md shadow-sm p-6">
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded" />}>
          <AnnouncementForm 
            initialData={announcementToEdit}
            onSubmit={handleSubmit} 
            onCancel={handleCancel} 
          />
        </Suspense>
      </div>
    </>
  );
}
