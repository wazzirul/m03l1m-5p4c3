import { StaticImageData } from 'next/image';

export interface Asset {
  id: string;
  name: string;
  type: 'image' | 'video';
  sourceUrl: string | StaticImageData;
  fileSize?: string;
  dimensions?: string;
  duration?: string; // For videos
  created_at: string;
  updated_at: string;
}
