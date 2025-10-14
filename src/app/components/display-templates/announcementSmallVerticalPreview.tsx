'use client';

import { useState, useEffect } from 'react';
import { pxToRem } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';
import 'swiper/css';
import './announcementSmallVertical.css';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

const SampleVideo = '/sample-videos.mp4';

interface colorProps {
  themeColor?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

// Skeleton component
function AnnouncementSmallVerticalSkeleton({
  colors,
}: {
  colors?: colorProps;
}) {
  const skeletonColor =
    colors?.primaryColor === '#ffffff' ? 'bg-gray-300' : 'bg-gray-300';

  const borderColor =
    colors?.primaryColor === '#ffffff' ? '#444444' : '#D1D1D7';

  return (
    <div
      className="w-full animate-pulse"
      style={{
        border: `${pxToRem(1)} solid ${borderColor}`,
        borderRadius: `${pxToRem(12)}`,
        padding: `${pxToRem(32)}`,
      }}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          style={{
            marginBottom: index < 1 ? `${pxToRem(32)}` : '0',
          }}
        >
          {/* Title skeleton */}
          <div
            className={`${skeletonColor} rounded-xl`}
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(32)}`,
              marginBottom: `${pxToRem(8)}`,
            }}
          />

          {/* Subtitle skeleton - multiple lines */}
          <div className="space-y-2">
            <div
              className={`${skeletonColor} rounded-xl`}
              style={{
                width: '100%',
                height: `${pxToRem(28)}`,
              }}
            />
            <div
              className={`${skeletonColor} rounded-xl`}
              style={{
                width: '80%',
                height: `${pxToRem(28)}`,
              }}
            />
            {index === 0 && (
              <div
                className={`${skeletonColor} rounded-xl`}
                style={{
                  width: '60%',
                  height: `${pxToRem(28)}`,
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

interface AnnouncementSmallVerticalProps {
  announcements?: Announcement[];
  colors?: colorProps;
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
}

export default function AnnouncementSmallVertical({
  announcements = [
    {
      id: 'ann-001',
      title: 'Announcement 1',
      content:
        'The Prayer Eid al-Fitr will take place on Sunday. 06:30 the first group and 07:30 the Second group',
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
      title: 'Announcement 2',
      content: 'The Prayer Eid al-Fitr will take place on Sunday.',
      video: null,
      image: ImageMosque2,
      date_schedule_from: '2025-08-31',
      date_schedule_to: '2025-08-31',
      target_location: 'outside',
      target_user: 'adult',
      created_at: '2025-08-19T08:00:00Z',
      updated_at: '2025-08-19T08:00:00Z',
    },
  ],
  colors,
  loadingDelay = 500, // Default 500ms loading delay
}: AnnouncementSmallVerticalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determine colors based on theme
  const titleColor = colors?.primaryColor || '#1A1A1A';

  const subtitleColor = hexToRgba(colors?.primaryColor || '#1A1A1A', 0.66);

  const borderColor = hexToRgba(colors?.primaryColor || '#1A1A1A', 0.2);

  // Loading effect with delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  // Show skeleton while loading
  if (isLoading) {
    return <AnnouncementSmallVerticalSkeleton colors={colors} />;
  }

  const slides =
    announcements.length === 2
      ? [...announcements, ...announcements]
      : announcements;

  return (
    <div
      className="w-full transition-opacity duration-300 ease-in-out overflow-hidden flex flex-col announcement-swiper"
      style={{
        border: `${pxToRem(1)} solid ${borderColor}`,
        borderRadius: `${pxToRem(12)}`,
        padding: `${pxToRem(32)}`,
        gap: `${pxToRem(32)}`,
        maxHeight: `${pxToRem(400)}`,
      }}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        direction="vertical"
        effect="slide"
        autoplay={{
          delay: 5000, // 30seconds
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        loop={announcements.length > 1}
        allowTouchMove={false}
        className="w-full h-full overflow-hidden"
        style={{
          height: '100%',
        }}
      >
        {slides.map((announcement, index) => (
          <SwiperSlide key={index} style={{ height: 'auto' }}>
            <div
              key={index}
              className="flex flex-col transition-all duration-300 ease-in-out"
              style={{
                gap: `${pxToRem(8)}`,
                paddingBottom: `${pxToRem(32)}`,
              }}
            >
              {/* Title */}
              <h3
                className="italic leading-[1.25] transition-colors duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(32)}`,
                  color: titleColor,
                  fontWeight: '600',
                }}
              >
                {announcement.title}
              </h3>

              {/* Subtitle */}
              <p
                className="italic leading-[1.42] transition-colors duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(28)}`,
                  color: subtitleColor,
                  fontWeight: '500',
                  margin: '0',
                }}
              >
                {announcement.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
