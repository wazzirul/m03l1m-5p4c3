'use client';
import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect, useRef } from 'react';
import { AuthUser } from '@/lib/auth-guard';
import { useTheme } from '@/contexts/ThemeContext';
import { SelectionDisplay } from './components/selectionDisplay';
import { DisplayPreview } from './components/displayPreview';
import { DisplayForm, DisplayFormData } from './components/forms';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';
import {
  LayoutType,
  StyleType,
  ContentType,
  LayoutDisplayName,
  displayToLayout,
} from '@/types/display';
import { MainContentData } from '@/app/components/display-templates/types';

import ImageDisplay from '@/app/components/display-templates/imageDisplay';
import VideoDisplay from '@/app/components/display-templates/videoDisplay';
import NextPrayerTimesPreview from '@/app/components/display-templates/NextPrayerTimesPreview';
import QuranVersePreview from '@/app/components/display-templates/quranVersePreview';
import AnnouncementDisplay from '@/app/components/display-templates/announcementDisplay';

// Bottom Layout
import BottomLayoutStyle1 from '@/assets/images/styles-display/bottom-layout-style-1.webp';
import BottomLayoutStyle2 from '@/assets/images/styles-display/bottom-layout-style-2.webp';
import BottomLayoutStyle3 from '@/assets/images/styles-display/bottom-layout-style-3.webp';
import BottomLayoutStyle4 from '@/assets/images/styles-display/bottom-layout-style-4.webp';
import BottomLayoutStyle5 from '@/assets/images/styles-display/bottom-layout-style-5.webp';
import BottomLayoutStyle6 from '@/assets/images/styles-display/bottom-layout-style-6.webp';

// Left Layout
import LeftLayoutStyle1 from '@/assets/images/styles-display/left-layout-style-1.webp';
import LeftLayoutStyle2 from '@/assets/images/styles-display/left-layout-style-2.webp';
import LeftLayoutStyle3 from '@/assets/images/styles-display/left-layout-style-3.webp';
import LeftLayoutStyle4 from '@/assets/images/styles-display/left-layout-style-4.webp';
import LeftLayoutStyle5 from '@/assets/images/styles-display/left-layout-style-5.webp';
import LeftLayoutStyle6 from '@/assets/images/styles-display/left-layout-style-6.webp';

// Right Layout
import RightLayoutStyle1 from '@/assets/images/styles-display/right-layout-style-1.webp';
import RightLayoutStyle2 from '@/assets/images/styles-display/right-layout-style-2.webp';
import RightLayoutStyle3 from '@/assets/images/styles-display/right-layout-style-3.webp';
import RightLayoutStyle4 from '@/assets/images/styles-display/right-layout-style-4.webp';
import RightLayoutStyle5 from '@/assets/images/styles-display/right-layout-style-5.webp';
import RightLayoutStyle6 from '@/assets/images/styles-display/right-layout-style-6.webp';

// L Layout
import LLayoutStyle1 from '@/assets/images/styles-display/l-layout-style-1.webp';
import LLayoutStyle2 from '@/assets/images/styles-display/l-layout-style-2.webp';
import LLayoutStyle3 from '@/assets/images/styles-display/l-layout-style-3.webp';
import LLayoutStyle4 from '@/assets/images/styles-display/l-layout-style-4.webp';
import LLayoutStyle5 from '@/assets/images/styles-display/l-layout-style-5.webp';
import LLayoutStyle6 from '@/assets/images/styles-display/l-layout-style-6.webp';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

const SampleVideo = '/sample-videos.mp4';

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
  const [selectedLayout, setSelectedLayout] =
    useState<LayoutType>('bottom');
  const [selectedStyle, setSelectedStyle] = useState<StyleType>(
    'Light Gradient Overlay'
  );
  const [selectedContent, setSelectedContent] =
    useState<ContentType>('Next Prayer Times');
  const [selectedColor, setSelectedColor] = useState(
    JSON.stringify({
      themeColor: '#FCD29A',
      primaryColor: '#1a1a1a',
      secondaryColor: '#ffffff',
    })
  );
  const [colorPopup, setColorPopup] = useState({
    isOpen: false,
    colorType: '',
    currentColor: '',
  });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedImageSource, setSelectedImageSource] = useState<string | null>(
    null
  );
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<
    string | null
  >(null);

  const [selectedVideoSource, setSelectedVideoSource] = useState<string | null>(
    null
  );

  // Handle display form submission
  const handleDisplayFormSubmit = (data: DisplayFormData) => {
    console.log('Display form submitted:', data);
    // TODO: Implement actual submission logic (API call, etc.)
  };

  // Handle image selection from form
  const handleImageSelection = (imageSource: string | null) => {
    setSelectedImageSource(imageSource);
  };

  // Handle video selection from form
  const handleVideoSelection = (videoSource: string | null) => {
    setSelectedVideoSource(videoSource);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const templateStyle = [
    {
      id: 'style1',
      name: 'Light Gradient Overlay',
      bottomLayout: BottomLayoutStyle1,
      leftLayout: LeftLayoutStyle1,
      rightLayout: RightLayoutStyle1,
      lLayout: LLayoutStyle1,
      styleId: 'style1',
      defaultColors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      defaultSelectedContent: {
        'bottom': 'Next Prayer Times',
        'left': 'Next Prayer Times',
        'right': 'Next Prayer Times',
        'l-layout': 'Quran Verse',
      },
    },
    {
      id: 'style2',
      name: 'Light Image Overlay',
      bottomLayout: BottomLayoutStyle2,
      leftLayout: LeftLayoutStyle2,
      rightLayout: RightLayoutStyle2,
      lLayout: LLayoutStyle2,
      styleId: 'style2',
      defaultColors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      defaultSelectedContent: {
        'bottom': 'Images',
        'left': 'Images',
        'right': 'Images',
        'l-layout': 'Images',
      },
    },
    {
      id: 'style3',
      name: 'Dark Gradient Overlay',
      bottomLayout: BottomLayoutStyle3,
      leftLayout: LeftLayoutStyle3,
      rightLayout: RightLayoutStyle3,
      lLayout: LLayoutStyle3,
      styleId: 'style3',
      defaultColors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      defaultSelectedContent: {
        'bottom': 'Next Prayer Times',
        'left': 'Next Prayer Times',
        'right': 'Next Prayer Times',
        'l-layout': 'Quran Verse',
      },
    },
    {
      id: 'style4',
      name: 'Dark Image Overlay',
      bottomLayout: BottomLayoutStyle4,
      leftLayout: LeftLayoutStyle4,
      rightLayout: RightLayoutStyle4,
      lLayout: LLayoutStyle4,
      styleId: 'style4',
      defaultColors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      defaultSelectedContent: {
        'bottom': 'Images',
        'left': 'Images',
        'right': 'Images',
        'l-layout': 'Images',
      },
    },
    {
      id: 'style5',
      name: 'Light Imagery',
      bottomLayout: BottomLayoutStyle5,
      leftLayout: LeftLayoutStyle5,
      rightLayout: RightLayoutStyle5,
      lLayout: LLayoutStyle5,
      styleId: 'style5',
      defaultColors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      defaultSelectedContent: {
        'bottom': 'Announcements',
        'left': 'Announcements',
        'right': 'Announcements',
        'l-layout': 'Announcements',
      },
    },
    {
      id: 'style6',
      name: 'Dark Imagery',
      bottomLayout: BottomLayoutStyle6,
      leftLayout: LeftLayoutStyle6,
      rightLayout: RightLayoutStyle6,
      lLayout: LLayoutStyle6,
      styleId: 'style6',
      defaultColors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      defaultSelectedContent: {
        'bottom': 'Announcements',
        'left': 'Announcements',
        'right': 'Announcements',
        'l-layout': 'Announcements',
      },
    },
  ];

  const prayerTimes = [
    { name: 'Fajr', scheduledTime: '04:30 AM', iqamahTime: '04:35 AM' },
    { name: 'Sunrise', scheduledTime: '05:31 AM', iqamahTime: '-' },
    { name: 'Zuhr', scheduledTime: '11:30 AM', iqamahTime: '11:35 AM' },
    { name: 'Ashr', scheduledTime: '02:58 PM', iqamahTime: '03:00 PM' },
    { name: 'Maghrib', scheduledTime: '05:35 PM', iqamahTime: '05:40 PM' },
    { name: 'Isya', scheduledTime: '06:45 PM', iqamahTime: '06:50 PM' },
    { name: 'Jumuah 1', scheduledTime: '11:35 AM', iqamahTime: '12:00 PM' },
  ];

  const parseColors = (colorString?: string) => {
    // If custom colors are provided, use them
    if (colorString) {
      try {
        return JSON.parse(colorString);
      } catch {
        // Fall through to default colors based on style
      }
    }
  };

  const colors = parseColors(selectedColor);

  interface QuranProps {
    verse: string;
    translation: string;
  }

  const [selectedQuranVerse, setSelectedQuranVerse] = useState<QuranProps[]>([
    {
      verse:
        'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
      translation:
        'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
    },
  ]);

  const listQuranVerse = [
    {
      name: 'Al-Baqarah : 45',
      verse:
        'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
      translation:
        'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
    },
    {
      name: 'Al-Baqarah : 286',
      verse:
        'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
      translation:
        'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
    },
    {
      name: 'Al-Imran : 102',
      verse:
        'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
      translation:
        'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
    },
    {
      name: 'Al-Imran : 159',
      verse:
        'فَبِمَا رَحْمَةٍ مِّنَ ٱللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ ٱلْقَلْبِ لَٱنْفَضُّوا۟ مِنْ حَوْلِكَ',
      translation:
        'So by mercy from Allah, [O Muhammad], you were lenient with them. And if you had been rude [in speech] and harsh in heart, they would have disbanded from about you. (Q.S Al-Imran : 159)',
    },
    {
      name: 'An-Nisa : 36',
      verse:
        'وَٱعْبُدُوا۟ ٱللَّهَ وَلَا تُشْرِكُوا۟ بِهِۦ شَيْـًۭٔا ۖ وَبِٱلْوَٰلِدَيْنِ إِحْسَـٰنًۭا',
      translation:
        'Worship Allah and associate nothing with Him, and to parents do good. (Q.S An-Nisa : 36)',
    },
    {
      name: 'Al-Anfal : 46',
      verse:
        'وَأَطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَنَـٰزَعُوا۟ فَتَفْشَلُوا۟ وَتَذْهَبَ رِيحُكُمْ',
      translation:
        'And obey Allah and His Messenger, and do not dispute and [thus] lose courage and your strength would depart. (Q.S Al-Anfal : 46)',
    },
    {
      name: 'Yunus : 57',
      verse:
        'يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَآءٌۭ لِّمَا فِى ٱلصُّدُورِ',
      translation:
        'O humanity! Indeed, there has come to you a warning from your Lord, a cure for what is in the hearts, a guide, and a mercy for the believers. (Q.S Yunus : 57)',
    },
    {
      name: 'Ar-Ra’d : 28',
      verse:
        'ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ',
      translation:
        'Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured. (Q.S Ar-Ra’d : 28)',
    },
    {
      name: 'An-Nahl : 90',
      verse:
        'إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَـٰنِ وَإِيتَآىِٕ ذِى ٱلْقُرْبَىٰ',
      translation:
        'Indeed, Allah commands justice and good conduct and giving to relatives. (Q.S An-Nahl : 90)',
    },
    {
      name: 'Al-Asr : 1-3',
      verse:
        'وَٱلْعَصْرِ ﴿١﴾ إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ ﴿٢﴾ إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ',
      translation:
        'By time, indeed mankind is in loss, except for those who have believed and done righteous deeds. (Q.S Al-Asr : 1-3)',
    },
  ];

  const [selectedAnnouncementType, setSelectedAnnouncementType] = useState<
    'text' | 'image' | 'video'
  >('image');
  const [selectedAnnouncements, setSelectedAnnouncements] = useState<
    Announcement[]
  >([]);
  const [selectedSmallAnnouncements, setSelectedSmallAnnouncements] = useState<
    Announcement[]
  >([]);

  // Main content data state
  const [mainContentData, setMainContentData] =
    useState<MainContentData | null>(null);
  // Sub content data state
  const [subContentData, setSubContentData] = useState<Announcement[] | null>(
    null
  );

  // Function to update main content data based on current selections
  const updateMainContentData = () => {
    const newMainContentData: MainContentData = {
      announcementData: null,
      imageData: null,
      videoData: null,
      quranData: null,
      backgroundColor: selectedBackgroundColor,
      backgroundImage: selectedImageSource,
    };

    // Set data based on selected content type
    switch (selectedContent) {
      case 'Images':
        if (selectedImageSource) {
          newMainContentData.imageData = { image: selectedImageSource };
        }
        break;
      case 'Videos':
        if (selectedVideoSource) {
          newMainContentData.videoData = { video: selectedVideoSource };
        }
        break;
      case 'Next Prayer Times':
        // For prayer times, we might need background image/color
        break;
      case 'Quran Verse':
        if (selectedQuranVerse && selectedQuranVerse.length > 0) {
          newMainContentData.quranData = { quran: selectedQuranVerse };
        }
        break;
      case 'Announcements':
        if (selectedAnnouncements && selectedAnnouncements.length > 0) {
          newMainContentData.announcementData = {
            announcements: selectedAnnouncements,
            announcementType: selectedAnnouncementType,
          };
        }
        break;
    }

    setMainContentData(newMainContentData);

    // Update sub content data with small announcements for L-Layout
    if (
      selectedLayout === 'l-layout' &&
      selectedSmallAnnouncements &&
      selectedSmallAnnouncements.length > 0
    ) {
      setSubContentData(selectedSmallAnnouncements);
    } else {
      setSubContentData(null);
    }
  };

  const announcementStaticData: Announcement[] = [
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
        'Join the mosque’s football tournament for youth aged 13–19. Register before September 1st.',
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

  // Update selectedColor and selectedContent when selectedStyle changes
  useEffect(() => {
    const matchedStyle = templateStyle.find(
      (style) => style.name === selectedStyle
    );
    if (matchedStyle) {
      setSelectedColor(JSON.stringify(matchedStyle.defaultColors));

      // Get the default content for the current layout
      const defaultContent =
        matchedStyle.defaultSelectedContent[
          selectedLayout as keyof typeof matchedStyle.defaultSelectedContent
        ];
      if (defaultContent) {
        setSelectedContent(defaultContent as any);
      }
    }
  }, [selectedStyle, selectedLayout]);

  // Update main content data when relevant state changes
  useEffect(() => {
    updateMainContentData();
  }, [
    selectedContent,
    selectedLayout,
    selectedImageSource,
    selectedVideoSource,
    selectedQuranVerse,
    selectedAnnouncements,
    selectedAnnouncementType,
    selectedBackgroundColor,
    selectedSmallAnnouncements,
  ]);

  console.log('selectedLayout : ', selectedLayout);
  console.log('selectedStyle : ', selectedStyle);
  console.log('selectedContent : ', selectedContent);
  console.log('selectedAnnouncementType : ', selectedAnnouncementType);
  console.log('selectedAnnouncements : ', selectedAnnouncements);
  console.log('selectedSmallAnnouncements : ', selectedSmallAnnouncements);
  console.log('mainContentData : ', mainContentData);
  console.log('subContentData : ', subContentData);

  return (
    <>
      <Suspense
        fallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}
      >
        <DashboardHeader
          title="Add New Display"
          description="Create a new display for the community"
          footerShow={true}
          footerItems={[
            {
              label: 'Overview',
              href: '/display-management',
              active: false,
            },
            {
              label: 'Assets',
              href: '/display-management/assets',
              active: false,
            },
          ]}
        />
      </Suspense>

      <div className="mt-6">
        <h1 className="relative text-4xl font-semibold text-center mx-auto max-w-[600px]">
          Bring your content to life by customizing your own display
        </h1>

        <SelectionDisplay
          selectedLayout={selectedLayout}
          selectedStyle={selectedStyle}
          selectedContent={selectedContent}
          selectedColor={selectedColor}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          setSelectedLayout={setSelectedLayout}
          setSelectedStyle={setSelectedStyle}
          setSelectedContent={setSelectedContent}
          setSelectedColor={setSelectedColor}
          dropdownRef={dropdownRef}
          colorPopup={colorPopup}
          setColorPopup={setColorPopup}
          templateStyles={templateStyle}
        />

        <DisplayForm
          selectedContent={selectedContent}
          selectedLayout={selectedLayout}
          selectedStyle={selectedStyle}
          onSubmit={handleDisplayFormSubmit}
          onImageSelection={handleImageSelection}
          onVideoSelection={handleVideoSelection}
          listQuranVerse={listQuranVerse}
          selectedQuranVerse={selectedQuranVerse}
          onQuranVerseSelection={setSelectedQuranVerse}
          announcementList={announcementStaticData}
          selectedAnnouncementType={selectedAnnouncementType}
          selectedAnnouncements={selectedAnnouncements}
          onAnnouncementTypeSelection={setSelectedAnnouncementType}
          onAnnouncementSelection={setSelectedAnnouncements}
          selectedBackgroundColor={selectedBackgroundColor}
          onBackgroundColorSelection={setSelectedBackgroundColor}
          smallAnnouncementList={announcementStaticData}
          selectedSmallAnnouncements={selectedSmallAnnouncements}
          onSmallAnnouncementSelection={setSelectedSmallAnnouncements}
        />

        <DisplayPreview
          selectedLayout={selectedLayout}
          selectedStyle={selectedStyle}
          selectedContent={selectedContent}
          selectedColor={selectedColor}
          templateStyles={templateStyle}
          mainContentData={mainContentData}
          subContentData={subContentData}
        />
      </div>
    </>
  );
}
