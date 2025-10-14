import { Metadata } from 'next';
import AuthWrapper from '@/components/auth-wrapper';
import Main from './main';
import { type Announcement } from '../../components/dataTable';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

const SampleVideo = '/sample-videos.mp4';

export const metadata: Metadata = {
  title: 'Edit Announcement | Muslim Spaces',
  description: 'Connecting Communities',
};

// Force dynamic rendering for authentication
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Server-side data fetching
const getAnnouncementData = async (): Promise<Announcement[]> => {
  // TODO: Replace with actual API call
  return [
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
        "Join the mosque's football tournament for youth aged 13–19. Register before September 1st.",
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
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  
  // Fetch announcement data on server-side
  const announcementData = await getAnnouncementData();
  const announcement = announcementData.find((ann) => ann.id === id);

  return (
    <AuthWrapper>
      {(user) => (
        <Main user={user} announcementId={id} announcement={announcement} />
      )}
    </AuthWrapper>
  );
};

export default Page;
