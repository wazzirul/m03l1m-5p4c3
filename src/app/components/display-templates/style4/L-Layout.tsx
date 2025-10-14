import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import HeroImage from '@/assets/images/styles/bg-4.png';

import PrayerTimesBottom from '@/app/components/display-templates/prayerTimesBottom';
import MosqueNameClockDate from '@/app/components/display-templates/mosqueNameClockDate';
import OrganizationName from '@/app/components/display-templates/organizationName';

import { pxtoVw, heightToVh } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';
import { getImageUrl } from '@/utils/image';
import { TemplateStyleProps } from '../types';
import dynamic from 'next/dynamic';

// Dynamic imports for content components
const NextPrayerTimes = dynamic(
  () => import('@/app/components/display-templates/NextPrayerTimes')
);
const AnnouncementDisplay = dynamic(
  () => import('@/app/components/display-templates/announcementDisplay')
);
const ImageDisplay = dynamic(
  () => import('@/app/components/display-templates/imageDisplay')
);
const VideoDisplay = dynamic(
  () => import('@/app/components/display-templates/videoDisplay')
);
const QuranVerse = dynamic(
  () => import('@/app/components/display-templates/quranVerse')
);
const AnnouncementSmallVertical = dynamic(
  () => import('@/app/components/display-templates/announcementSmallVertical')
);

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

const SampleVideo = '/sample-videos.mp4';

export default function Style4LLayout({
  orgName = 'MCC San Diego',
  mosqueName = 'San Diego Mosque',
  colors = {
    primaryColor: '#ffffff',
    secondaryColor: '#1A1A1A',
  },
  selectedContent = 'Images',
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
      image: HeroImage,
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
  subContentData = [
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
      className="w-full min-h-screen relative flex flex-col"
      style={{
        padding: `${pxtoVw(24)} ${pxtoVw(24)} ${pxtoVw(16)}`,
        background: colors?.secondaryColor || '#ffffff',
        gap: `${pxtoVw(16)}`,
      }}
    >
      {/* Top Section - Left and Right Side */}
      <div
        className="flex flex-1"
        style={{
          gap: `${pxtoVw(32)}`,
          maxHeight: `${pxtoVw(844)}`,
        }}
      >
        {/* Left Side - Mosque Info and Announcements */}
        <div
          className="flex flex-col relative justify-between"
          style={{
            width: `${pxtoVw(632 - 24 - 16)}`,
            gap: `${pxtoVw(32)}`,
            paddingTop: `${pxtoVw(8)}`,
            paddingLeft: `${pxtoVw(8)}`,
            paddingBottom: `${pxtoVw(16)}`,
          }}
        >
          {/* Organization Name */}
          <OrganizationName
            organizationName={orgName}
            colors={colors}
            style={{ position: 'relative', top: 'unset' }}
          />

          {/* Mosque Name, Clock and Date */}
          <div>
            <MosqueNameClockDate
              mosqueName={mosqueName}
              colors={colors}
              typeLayout="l-layout"
            />
          </div>

          {/* Sub Content / Small Announcements Vertical */}
          <div className="w-full">
            {subContentData && (
              <AnnouncementSmallVertical
                announcements={subContentData}
                colors={colors}
              />
            )}
          </div>
        </div>

        {/* Right Side - Background Image Area */}
        <div
          className="flex-1 relative overflow-hidden rounded-tr-4xl rounded-br-4xl"
          style={{
            minHeight: `${heightToVh(836)}`,
          }}
        >
          {/* Main Content */}
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
            <div
              className="w-full h-full absolute inset-0 z-1 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, ' +
                  colors?.secondaryColor +
                  ' 0%, ' +
                  hexToRgba(colors?.secondaryColor || '#1A1A1A', 0.0) +
                  ' 50%)',
              }}
            ></div>
          </div>

          {/* Copyright */}
          <div
            className="absolute leading-[1.25] z-10"
            style={{
              fontSize: `${pxtoVw(32)}`,
              fontWeight: 500,
              top: `${pxtoVw(16)}`,
              right: `${pxtoVw(22)}`,
              padding: `${pxtoVw(16)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
              background: colors?.secondaryColor || '#ffffff',
              borderRadius: `${pxtoVw(100)}`,
            }}
          >
            by Muslim Spaces
          </div>
        </div>
      </div>

      {/* Bottom Section - Prayer Times Table (Full Width) */}
      <div
        style={{
          height: `${pxtoVw(188)}`,
        }}
      >
        <PrayerTimesBottom prayerTimes={prayerTimes} colors={colors} />
      </div>
    </div>
  );
}
