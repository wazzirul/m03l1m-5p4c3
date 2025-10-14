'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { toast } from 'sonner';
import { AuthUser } from '@/lib/auth-guard';
import { useTheme } from '@/contexts/ThemeContext';
// Lazy load AnnouncementForm
const AnnouncementForm = dynamic(
  () => import('../components/form').then(mod => ({ default: mod.AnnouncementForm })),
  {
    ssr: false,
  }
);
import { type Announcement } from '../components/dataTable';

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
  const { router } = useProgress();

  const handleSubmit = async (
    data: Omit<Announcement, 'id' | 'created_at' | 'updated_at'>
  ) => {
    try {
      // TODO: Implement API call to create announcement
      console.log('Creating announcement:', data);

      // Redirect with success parameter
      router.push('/announcement?success=created');
    } catch (error) {
      console.error('Failed to create announcement:', error);

      // Show error toast
      toast.error('Failed to Create Announcement', {
        description: 'Something went wrong. Please try again.',
        duration: 4000,
      });
    }
  };

  const handleCancel = () => {
    router.push('/announcement');
  };

  return (
    <>
      <Suspense
        fallback={
          <div className="h-12 bg-muted animate-pulse rounded mb-6" />
        }
      >
        <DashboardHeader
          title="Add Announcement"
          description="Create a new announcement for the community"
        />
      </Suspense>

      <div className="bg-card border border-border rounded-md shadow-sm p-6">
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded" />}>
          <AnnouncementForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </Suspense>
      </div>
    </>
  );
}
