import Image, { StaticImageData } from 'next/image';
import ImageDisplay from './imageDisplay';
import VideoDisplay from './videoDisplay';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';
import { pxtoVw } from '@/utils/viewport';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

interface colorProps {
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface AnnouncementDisplayProps {
  announcements: Announcement[];
  typeDisplay: 'text' | 'image' | 'video';
  colors?: colorProps;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnnouncementDisplay({
  announcements,
  typeDisplay,
  colors,
  className,
  style,
}: AnnouncementDisplayProps) {
  console.log('announcements', announcements);

  if (!announcements || announcements.length === 0) return null;

  const renderAnnouncementContent = (announcement: Announcement) => {
    switch (typeDisplay) {
      case 'text':
        return (
          <div
            className="flex flex-col items-center justify-center text-center m-auto"
            style={{
              maxWidth: `${pxtoVw(855)}`,
              gap: `${pxtoVw(16)}`,
            }}
          >
            <p
              className="font-bold"
              style={{
                fontSize: `${pxtoVw(64)}`,
                color: colors?.primaryColor || '#1a1a1a',
              }}
            >
              {announcement.title}
            </p>
            <p
              style={{
                fontSize: `${pxtoVw(32)}`,
                color: colors?.primaryColor || '#1a1a1a',
              }}
            >
              {announcement.content}
            </p>
          </div>
        );
      case 'image':
        if (!announcement.image) return null;
        return (
          <ImageDisplay image={announcement.image} className="" style={{}} />
        );
      case 'video':
        if (!announcement.video) return null;
        return (
          <VideoDisplay video={announcement.video} className="" style={{}} />
        );
      default:
        return null;
    }
  };

  // If only one announcement, render directly without Swiper
  if (announcements.length === 1) {
    return (
      <div
        className={`w-full h-full relative z-10 flex flex-col items-center justify-center m-auto ${className}`}
        style={style}
      >
        {renderAnnouncementContent(announcements[0])}
      </div>
    );
  }

  // Multiple announcements - use Swiper
  return (
    <div className={`w-full relative h-full z-10 ${className}`} style={style}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 300000, // 5 minutes
          disableOnInteraction: false,
        }}
        loop={announcements.length > 1}
        allowTouchMove={false}
        className="w-full h-full"
      >
        {announcements.map((announcement, index) => (
          <SwiperSlide key={`${announcement.id}-${index}`} className="!flex">
            {renderAnnouncementContent(announcement)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
