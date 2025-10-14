import { StaticImageData } from 'next/image';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';

export interface TemplateColorProps {
  themeColor?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

type ContentType =
  | 'Images'
  | 'Videos'
  | 'Announcements'
  | 'Quran Verse'
  | 'Next Prayer Times';

type AnnouncementType = 'text' | 'image' | 'video' | null;

type AnnouncementsData = {
  announcements: Announcement[];
  announcementType?: AnnouncementType;
};

type ImageData = {
  image: string | StaticImageData;
};

type VideoData = {
  video: string;
};
interface QuranProps {
  verse: string;
  translation: string;
}

interface QuranVerseProps {
  quran: QuranProps[];
}

export type MainContentData = {
  announcementData: AnnouncementsData | null;
  imageData: ImageData | null;
  videoData: VideoData | null;
  quranData: QuranVerseProps | null;
  backgroundColor?: string | null;
  backgroundImage?: string | StaticImageData | null;
};

export interface TemplateStyleProps {
  orgName?: string;
  orgImage?: string | StaticImageData;
  mosqueName?: string;
  mosqueImage?: string | StaticImageData;
  colors?: TemplateColorProps;
  mainContent?: React.ReactNode;
  subContent?: React.ReactNode;
  selectedContent?: ContentType;
  mainContentData?: MainContentData | null;
  subContentData?: Announcement[] | null;
}
