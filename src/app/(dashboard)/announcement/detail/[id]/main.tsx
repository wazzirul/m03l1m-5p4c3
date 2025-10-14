'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { AuthUser } from '@/lib/auth-guard';
import { useTheme } from '@/contexts/ThemeContext';
import { type Announcement } from '../../components/dataTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Edit,
  ArrowLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import DashboardHeader from '@/app/components/dashboardHeader';

// Lazy load main content components
const MainContent = dynamic(() => import('./components/MainContent'), {
  ssr: false,
});

interface Props {
  user: AuthUser;
  announcementId: string;
  announcement?: Announcement;
}

export default function Main({ user, announcementId, announcement }: Props) {
  const { router } = useProgress();
  const { theme } = useTheme();

  const handleEdit = () => {
    router.push(`/announcement/edit/${announcementId}`);
  };

  const handleBack = () => {
    router.push('/announcement');
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTargetUserLabel = (target: string) => {
    const labels = {
      all: 'All Community',
      adult: 'Adults',
      teen: 'Teenagers',
      child: 'Children',
    };
    return labels[target as keyof typeof labels] || target;
  };

  const getLocationLabel = (location: string) => {
    return location === 'inside' ? 'Inside Mosque' : 'Outside Mosque';
  };

  // Handle case where announcement is not found
  if (!announcement) {
    return (
      <>
        <DashboardHeader
          title="Announcement Not Found"
          description="The requested announcement could not be found"
        />

        <div className="bg-card border border-border rounded-md shadow-sm p-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Announcement with ID "{announcementId}" not found.
            </p>
            <Button onClick={handleBack} variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Announcements
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardHeader
        title={announcement.title}
        description="Announcement Details"
        action={
          <div className="flex justify-between items-center gap-2">
            <Link href="/announcement/">
              <Button variant="outline" className="cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Announcement
              </Button>
            </Link>
            <Link href={`/announcement/edit/${announcementId}`}>
              <Button variant="default" className="cursor-pointer">
                <Edit className="w-4 h-4 mr-2" />
                Edit Announcement
              </Button>
            </Link>
          </div>
        }
        mobileAction={[
          {
            icon: <ArrowLeft className="h-4 w-4 relative top-[1px]" />,
            label: 'Back to Announcement',
            href: '/announcement/',
          },
          {
            icon: <Edit className="h-4 w-4 relative top-[1px]" />,
            label: 'Edit Announcement',
            href: `/announcement/edit/${announcementId}`,
          },
        ]}
      />

      <Suspense
        fallback={<div className="h-96 bg-muted animate-pulse rounded" />}
      >
        <MainContent
          announcement={announcement}
          formatDate={formatDate}
          formatDateTime={formatDateTime}
          getTargetUserLabel={getTargetUserLabel}
          getLocationLabel={getLocationLabel}
        />
      </Suspense>
    </>
  );
}
