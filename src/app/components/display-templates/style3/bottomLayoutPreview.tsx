import Image, { StaticImageData } from 'next/image';
import HeroImage from '@/assets/images/styles/bg-3.png';

import PrayerTimesBottom from '@/app/components/display-templates/prayerTimesBottomPreview';
import MosqueNameClockDate from '@/app/components/display-templates/mosqueNameClockDatePreview';
import OrganizationName from '@/app/components/display-templates/organizationNamePreview';

import { pxToRem } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';
import { getImageUrl } from '@/utils/image';
import Style3PatternBottom from '@/app/components/display-templates/Style3PatternBottom';
import { TemplateStyleProps } from '../types';
import dynamic from 'next/dynamic';

// Dynamic imports for content components
const NextPrayerTimes = dynamic(
  () => import('@/app/components/display-templates/NextPrayerTimesPreview')
);
const AnnouncementDisplay = dynamic(
  () => import('@/app/components/display-templates/announcementDisplayPreview')
);
const ImageDisplay = dynamic(
  () => import('@/app/components/display-templates/imageDisplay')
);
const VideoDisplay = dynamic(
  () => import('@/app/components/display-templates/videoDisplay')
);
const QuranVerse = dynamic(
  () => import('@/app/components/display-templates/quranVersePreview')
);

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

const SampleVideo = '/sample-videos.mp4';

export default function Style3BottomLayout({
  orgName = 'MCC San Diego',
  mosqueName = 'San Diego Mosque',
  colors = {
    themeColor: '#0950A1',
    // themeColor: '#09a177',
    primaryColor: '#ffffff',
    secondaryColor: '#1A1A1A',
  },
  selectedContent = 'Next Prayer Times',
  mainContentData = {
    announcementData: {
      announcementType: 'image',
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
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
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
    },
    imageData: {
      image: ImageMosque3,
    },
    videoData: {
      video: SampleVideo,
    },
    quranData: {
      quran: [
        {
          verse:
            'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
          translation:
            'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
        },
        {
          verse:
            'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
          translation:
            'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
        },
        {
          verse:
            'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
          translation:
            'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
        },
      ],
    },
    backgroundColor: null,
    backgroundImage: null,
  },
}: TemplateStyleProps = {}) {
  const prayerTimes = [
    { name: 'Fajr', scheduledTime: '04:30 AM', iqamahTime: '04:35 AM' },
    { name: 'Sunrise', scheduledTime: '05:31 AM', iqamahTime: '-' },
    { name: 'Zuhr', scheduledTime: '11:30 AM', iqamahTime: '11:35 AM' },
    { name: 'Ashr', scheduledTime: '02:58 PM', iqamahTime: '03:00 PM' },
    { name: 'Maghrib', scheduledTime: '05:35 PM', iqamahTime: '05:40 PM' },
    { name: 'Isya', scheduledTime: '06:45 PM', iqamahTime: '06:50 PM' },
    { name: 'Jumuah 1', scheduledTime: '11:35 AM', iqamahTime: '12:00 PM' },
  ];

  return (
    <div
      className="w-full relative h-full"
      style={{
        padding: `${pxToRem(24)} ${pxToRem(24)} ${pxToRem(0)} `,
        background: colors?.secondaryColor || '#1A1A1A',
      }}
    >
      {/* Main Content */}
      <div
        className="w-full relative z-1"
        style={{
          height: pxToRem(844),
        }}
      >
        <div className="w-full relative z-1 h-full rounded-4xl overflow-hidden flex">
          {selectedContent === 'Next Prayer Times' ||
          selectedContent === 'Quran Verse' ||
          (selectedContent === 'Announcements' &&
            mainContentData?.announcementData?.announcementType === 'text') ? (
            <>
              {/* Background Images */}
              {colors.themeColor === null || colors.themeColor === '#0950A1' ? (
                <Image
                  src={HeroImage}
                  alt=""
                  className="w-full h-full absolute inset-0 z-0 pointer-events-none"
                  fill
                  loading="lazy"
                />
              ) : (
                <>
                  <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
                    <div
                      className="w-full h-full absolute inset-0 z-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(180deg, ${
                          colors?.secondaryColor || '#1A1A1A'
                        } -81.82%, ${colors?.themeColor || '#00556F'} 65.91%, ${
                          colors?.secondaryColor || '#1A1A1A'
                        } 215.67%)`,
                      }}
                    ></div>
                    <Style3PatternBottom
                      className="w-full h-full absolute inset-0 z-0 pointer-events-none"
                      themeColor={colors?.themeColor || '#9ABCFC'}
                    />
                    <div
                      className="w-full h-full absolute inset-0 z-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(0deg, ' +
                          colors?.secondaryColor +
                          ' 0%, ' +
                          hexToRgba(colors?.secondaryColor || '#1a1a1a', 0.0) +
                          ' 58%)',
                      }}
                    ></div>
                  </div>
                </>
              )}
            </>
          ) : null}

          {/* Content Display Components */}
          <div
            className="relative z-10 w-full h-full flex items-center justify-center"
            style={{
              ...(mainContentData?.backgroundColor
                ? { backgroundColor: mainContentData.backgroundColor }
                : {}),
              ...(mainContentData?.backgroundImage
                ? {
                    backgroundImage: `url(${getImageUrl(
                      mainContentData.backgroundImage
                    )})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
                : {}),
            }}
          >
            {selectedContent === 'Next Prayer Times' && (
              <NextPrayerTimes prayerTimes={prayerTimes} colors={colors} />
            )}
            {selectedContent === 'Announcements' &&
              mainContentData?.announcementData && (
                <AnnouncementDisplay
                  announcements={
                    mainContentData.announcementData.announcements || []
                  }
                  typeDisplay={
                    mainContentData.announcementData.announcementType || 'text'
                  }
                  colors={colors}
                />
              )}
            {selectedContent === 'Images' && mainContentData?.imageData && (
              <ImageDisplay image={mainContentData.imageData.image} />
            )}
            {selectedContent === 'Videos' && mainContentData?.videoData && (
              <VideoDisplay video={mainContentData.videoData.video} />
            )}
            {selectedContent === 'Quran Verse' &&
              mainContentData?.quranData && (
                <QuranVerse
                  quran={mainContentData.quranData.quran}
                  colors={colors}
                />
              )}
          </div>

          {/* Organization Name */}
          <OrganizationName
            organizationName={orgName}
            colors={colors}
            positionXValue={20}
          />
          {/* Copyright */}
          <div
            className="absolute leading-[1.25] z-10"
            style={{
              fontSize: `${pxToRem(32)}`,
              fontWeight: 500,
              top: `${pxToRem(16)}`,
              right: `${pxToRem(22)}`,
              padding: `${pxToRem(16)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
              background: colors?.secondaryColor || '#ffffff',
              borderRadius: `${pxToRem(100)}`,
            }}
          >
            by Muslim Spaces
          </div>
        </div>
      </div>
      {/* Mosque Name, Date Time, Prayer Table */}
      <div
        className="w-full relative z-2"
        style={{
          minHeight: pxToRem(188),
          position: 'relative',
          marginTop: `${pxToRem(-12)}`,
          background: colors?.secondaryColor || '#1a1a1a',
        }}
      >
        <div
          className="w-full h-full grid"
          style={{
            gridTemplateColumns: `${pxToRem(393)} 1fr`,
            gap: pxToRem(24),
          }}
        >
          <MosqueNameClockDate mosqueName={mosqueName} colors={colors} />
          <PrayerTimesBottom prayerTimes={prayerTimes} colors={colors} />
        </div>
      </div>
    </div>
  );
}
