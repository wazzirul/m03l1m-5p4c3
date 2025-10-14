import { TemplateStyleProps } from '@/app/components/display-templates/types';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';

import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';

// Bottom Layout
import HeroImageStyle2Bottom from '@/assets/images/styles/style2-bottom-layout-images.webp';
import HeroImageStyle4Bottom from '@/assets/images/styles/bg-4.png';
import HeroImageStyle56Bottom from '@/assets/images/styles/bg-5-6.png';

// Left Layout
import HeroImageStyle2Left from '@/assets/images/styles/bg-2-left.png';
import HeroImageStyle4Left from '@/assets/images/styles/style2-left-layout.png';
import HeroImageStyle56Left from '@/assets/images/styles/bg-5-6-left-right.png';

// Right Layout
import HeroImageStyle2Right from '@/assets/images/styles/bg-2-left.png';
import HeroImageStyle4Right from '@/assets/images/styles/style4-right-layout-images.png';
import HeroImageStyle56Right from '@/assets/images/styles/bg-5-6-left-right.png';

// L-Layout
import HeroImageStyle2LLayout from '@/assets/images/styles/bg-2-l-layout.png';
import HeroImageStyle4LLayout from '@/assets/images/styles/bg-4.png';
import HeroImageStyle56LLayout from '@/assets/images/styles/style6-l-layout.png';

const SampleVideo = '/sample-videos.mp4';

// Static data for different slug codes
export const slugData = {
  // Bottom Layout Styles
  bs1npt: {
    title: 'Bottom Layout Style 1 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
    },
  },
  bs1img: {
    title: 'Bottom Layout Style 1 - Images',
    description: 'Images - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque3,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs1vid: {
    title: 'Bottom Layout Style 1 - Video',
    description: 'Video - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs1ant: {
    title: 'Bottom Layout Style 1 - Announcements ( Text ) ',
    description: 'Announcements ( Text ) - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs1ani: {
    title: 'Bottom Layout Style 1 - Announcements ( Image ) ',
    description: 'Announcements ( Image ) - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
            {
              id: 'ann-003',
              title: 'Eid al-Fitr',
              content: 'The Preyer Eid al-Fitr will take place on Sunday.',
              video: null,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs1anv: {
    title: 'Bottom Layout Style 1 - Announcements ( Video ) ',
    description: 'Announcements ( Video ) - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs1qrn: {
    title: 'Bottom Layout Style 1 - Quran Verse ',
    description: 'Quran Verse - Bottom Layout Style 1',
    layout: 'bottom',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Bottom Layout Style 2
  bs2npt: {
    title: 'Bottom Layout Style 2 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  bs2img: {
    title: 'Bottom Layout Style 2 - Images',
    description: 'Images - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2Bottom,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs2vid: {
    title: 'Bottom Layout Style 2 - Video',
    description: 'Video - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs2ant: {
    title: 'Bottom Layout Style 2 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  bs2ani: {
    title: 'Bottom Layout Style 2 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs2anv: {
    title: 'Bottom Layout Style 2 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs2qrn: {
    title: 'Bottom Layout Style 2 - Quran Verse',
    description: 'Quran Verse - Bottom Layout Style 2',
    layout: 'bottom',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  // Bottom Layout Style 3
  bs3npt: {
    title: 'Bottom Layout Style 3 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3img: {
    title: 'Bottom Layout Style 3 - Images',
    description: 'Images - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3vid: {
    title: 'Bottom Layout Style 3 - Video',
    description: 'Video - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3ant: {
    title: 'Bottom Layout Style 3 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3ani: {
    title: 'Bottom Layout Style 3 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3anv: {
    title: 'Bottom Layout Style 3 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs3qrn: {
    title: 'Bottom Layout Style 3 - Quran Verse',
    description: 'Quran Verse - Bottom Layout Style 3',
    layout: 'bottom',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Bottom Layout Style 4
  bs4npt: {
    title: 'Bottom Layout Style 4 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  bs4img: {
    title: 'Bottom Layout Style 4 - Images',
    description: 'Images - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle4Bottom,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs4vid: {
    title: 'Bottom Layout Style 4 - Video',
    description: 'Video - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs4ant: {
    title: 'Bottom Layout Style 4 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Bottom,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  bs4ani: {
    title: 'Bottom Layout Style 4 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs4anv: {
    title: 'Bottom Layout Style 4 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs4qrn: {
    title: 'Bottom Layout Style 4 - Quran Verse',
    description: 'Quran Verse - Bottom Layout Style 4',
    layout: 'bottom',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  // Bottom Layout Style 5
  bs5npt: {
    title: 'Bottom Layout Style 5 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  bs5img: {
    title: 'Bottom Layout Style 5 - Images',
    description: 'Images - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs5vid: {
    title: 'Bottom Layout Style 5 - Video',
    description: 'Video - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs5ant: {
    title: 'Bottom Layout Style 5 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  bs5ani: {
    title: 'Bottom Layout Style 5 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs5anv: {
    title: 'Bottom Layout Style 5 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs5qrn: {
    title: 'Bottom Layout Style 5 - Quran Verse',
    description: 'Quran Verse - Bottom Layout Style 5',
    layout: 'bottom',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  // Bottom Layout Style 6
  bs6npt: {
    title: 'Bottom Layout Style 6 - Next Prayer Times',
    description: 'Next Prayer Times - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  bs6img: {
    title: 'Bottom Layout Style 6 - Images',
    description: 'Images - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs6vid: {
    title: 'Bottom Layout Style 6 - Video',
    description: 'Video - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs6ant: {
    title: 'Bottom Layout Style 6 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  bs6ani: {
    title: 'Bottom Layout Style 6 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Bottom,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs6anv: {
    title: 'Bottom Layout Style 6 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  bs6qrn: {
    title: 'Bottom Layout Style 6 - Quran Verse',
    description: 'Quran Verse - Bottom Layout Style 6',
    layout: 'bottom',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1a1a1a',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Bottom,
      },
    },
  },
  // Left Layout Styles
  ls1npt: {
    title: 'Left Layout Style 1 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
    },
  },
  ls1img: {
    title: 'Left Layout Style 1 - Images',
    description: 'Images - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque3,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls1vid: {
    title: 'Left Layout Style 1 - Video',
    description: 'Video - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls1ant: {
    title: 'Left Layout Style 1 - Announcements ( Text ) ',
    description: 'Announcements ( Text ) - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls1ani: {
    title: 'Left Layout Style 1 - Announcements ( Image ) ',
    description: 'Announcements ( Image ) - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls1anv: {
    title: 'Left Layout Style 1 - Announcements ( Video ) ',
    description: 'Announcements ( Video ) - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls1qrn: {
    title: 'Left Layout Style 1 - Quran Verse ',
    description: 'Quran Verse - Left Layout Style 1',
    layout: 'left',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Left Layout Style 2
  ls2npt: {
    title: 'Left Layout Style 2 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  ls2img: {
    title: 'Left Layout Style 2 - Images',
    description: 'Images - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls2vid: {
    title: 'Left Layout Style 2 - Video',
    description: 'Video - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls2ant: {
    title: 'Left Layout Style 2 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: {
          image: HeroImageStyle2Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  ls2ani: {
    title: 'Left Layout Style 2 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: {
          image: HeroImageStyle2Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls2anv: {
    title: 'Left Layout Style 2 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls2qrn: {
    title: 'Left Layout Style 2 - Quran Verse',
    description: 'Quran Verse - Left Layout Style 2',
    layout: 'left',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2Left,
        },
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Bottom,
      },
    },
  },
  // Left Layout Style 3
  ls3npt: {
    title: 'Left Layout Style 3 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3img: {
    title: 'Left Layout Style 3 - Images',
    description: 'Images - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3vid: {
    title: 'Left Layout Style 3 - Video',
    description: 'Video - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3ant: {
    title: 'Left Layout Style 3 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3ani: {
    title: 'Left Layout Style 3 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3anv: {
    title: 'Left Layout Style 3 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls3qrn: {
    title: 'Left Layout Style 3 - Quran Verse',
    description: 'Quran Verse - Left Layout Style 3',
    layout: 'left',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Left Layout Style 4
  ls4npt: {
    title: 'Left Layout Style 4 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle4Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  ls4img: {
    title: 'Left Layout Style 4 - Images',
    description: 'Images - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle4Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls4vid: {
    title: 'Left Layout Style 4 - Video',
    description: 'Video - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls4ant: {
    title: 'Left Layout Style 4 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: {
          image: HeroImageStyle4Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  ls4ani: {
    title: 'Left Layout Style 4 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: {
          image: HeroImageStyle4Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls4anv: {
    title: 'Left Layout Style 4 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls4qrn: {
    title: 'Left Layout Style 4 - Quran Verse',
    description: 'Quran Verse - Left Layout Style 4',
    layout: 'left',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle4Left,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Bottom,
      },
    },
  },
  // Left Layout Style 5
  ls5npt: {
    title: 'Left Layout Style 5 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls5img: {
    title: 'Left Layout Style 5 - Images',
    description: 'Images - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle56Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls5vid: {
    title: 'Left Layout Style 5 - Video',
    description: 'Video - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls5ant: {
    title: 'Left Layout Style 5 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls5ani: {
    title: 'Left Layout Style 5 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls5anv: {
    title: 'Left Layout Style 5 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls5qrn: {
    title: 'Left Layout Style 5 - Quran Verse',
    description: 'Quran Verse - Left Layout Style 5',
    layout: 'left',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  // Left Layout Style 6
  ls6npt: {
    title: 'Left Layout Style 6 - Next Prayer Times',
    description: 'Next Prayer Times - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls6img: {
    title: 'Left Layout Style 6 - Images',
    description: 'Images - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle56Left,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls6vid: {
    title: 'Left Layout Style 6 - Video',
    description: 'Video - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  ls6ant: {
    title: 'Left Layout Style 6 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls6ani: {
    title: 'Left Layout Style 6 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls6anv: {
    title: 'Left Layout Style 6 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Left,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  ls6qrn: {
    title: 'Left Layout Style 6 - Quran Verse',
    description: 'Quran Verse - Left Layout Style 6',
    layout: 'left',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Left,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Left,
      },
    },
  },
  // Right Layout Styles
  rs1npt: {
    title: 'Right Layout Style 1 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
    },
  },
  rs1img: {
    title: 'Right Layout Style 1 - Images',
    description: 'Images - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque3,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs1vid: {
    title: 'Right Layout Style 1 - Video',
    description: 'Video - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs1ant: {
    title: 'Right Layout Style 1 - Announcements ( Text ) ',
    description: 'Announcements ( Text ) - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs1ani: {
    title: 'Right Layout Style 1 - Announcements ( Image ) ',
    description: 'Announcements ( Image ) - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs1anv: {
    title: 'Right Layout Style 1 - Announcements ( Video ) ',
    description: 'Announcements ( Video ) - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs1qrn: {
    title: 'Right Layout Style 1 - Quran Verse ',
    description: 'Quran Verse - Right Layout Style 1',
    layout: 'right',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Right Layout Style 2
  rs2npt: {
    title: 'Right Layout Style 2 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle2Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  rs2img: {
    title: 'Right Layout Style 2 - Images',
    description: 'Images - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2Right,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  rs2vid: {
    title: 'Right Layout Style 2 - Video',
    description: 'Video - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs2ant: {
    title: 'Right Layout Style 2 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  rs2ani: {
    title: 'Right Layout Style 2 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  rs2anv: {
    title: 'Right Layout Style 2 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  rs2qrn: {
    title: 'Right Layout Style 2 - Quran Verse',
    description: 'Quran Verse - Right Layout Style 2',
    layout: 'right',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle2Right,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle2Right,
      },
    },
  },
  // Right Layout Style 3
  rs3npt: {
    title: 'Right Layout Style 3 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3img: {
    title: 'Right Layout Style 3 - Images',
    description: 'Images - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3vid: {
    title: 'Right Layout Style 3 - Video',
    description: 'Video - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3ant: {
    title: 'Right Layout Style 3 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3ani: {
    title: 'Right Layout Style 3 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3anv: {
    title: 'Right Layout Style 3 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs3qrn: {
    title: 'Right Layout Style 3 - Quran Verse',
    description: 'Quran Verse - Right Layout Style 3',
    layout: 'right',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  // Right Layout Style 4
  rs4npt: {
    title: 'Right Layout Style 4 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle4Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  rs4img: {
    title: 'Right Layout Style 4 - Images',
    description: 'Images - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle4Right,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  rs4vid: {
    title: 'Right Layout Style 4 - Video',
    description: 'Video - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs4ant: {
    title: 'Right Layout Style 4 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  rs4ani: {
    title: 'Right Layout Style 4 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  rs4anv: {
    title: 'Right Layout Style 4 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  rs4qrn: {
    title: 'Right Layout Style 4 - Quran Verse',
    description: 'Quran Verse - Right Layout Style 4',
    layout: 'right',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle4Right,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle4Right,
      },
    },
  },
  // Right Layout Style 5
  rs5npt: {
    title: 'Right Layout Style 5 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs5img: {
    title: 'Right Layout Style 5 - Images',
    description: 'Images - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle56Right,
        },
        videoData: null,
        quranData: HeroImageStyle56Right,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs5vid: {
    title: 'Right Layout Style 5 - Video',
    description: 'Video - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs5ant: {
    title: 'Right Layout Style 5 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs5ani: {
    title: 'Right Layout Style 5 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs5anv: {
    title: 'Right Layout Style 5 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs5qrn: {
    title: 'Right Layout Style 5 - Quran Verse',
    description: 'Quran Verse - Right Layout Style 5',
    layout: 'right',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  // Right Layout Style 6
  rs6npt: {
    title: 'Right Layout Style 6 - Next Prayer Times',
    description: 'Next Prayer Times - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs6img: {
    title: 'Right Layout Style 6 - Images',
    description: 'Images - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle56Right,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs6vid: {
    title: 'Right Layout Style 6 - Video',
    description: 'Video - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
    },
  },
  rs6ant: {
    title: 'Right Layout Style 6 - Announcements ( Text )',
    description: 'Announcements ( Text ) - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs6ani: {
    title: 'Right Layout Style 6 - Announcements ( Image )',
    description: 'Announcements ( Image ) - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs6anv: {
    title: 'Right Layout Style 6 - Announcements ( Video )',
    description: 'Announcements ( Video ) - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56Right,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  rs6qrn: {
    title: 'Right Layout Style 6 - Quran Verse',
    description: 'Quran Verse - Right Layout Style 6',
    layout: 'right',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56Right,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56Right,
      },
    },
  },
  // L-Layout Styles
  lls1npt: {
    title: 'L-Layout Style 1 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1img: {
    title: 'L-Layout Style 1 - Images',
    description: 'Images - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque3,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1vid: {
    title: 'L-Layout Style 1 - Video',
    description: 'Video - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1ant: {
    title: 'L-Layout Style 1 - Announcements ( Text ) ',
    description: 'Announcements ( Text ) - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1ani: {
    title: 'L-Layout Style 1 - Announcements ( Image ) ',
    description: 'Announcements ( Image ) - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1anv: {
    title: 'L-Layout Style 1 - Announcements ( Video ) ',
    description: 'Announcements ( Video ) - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
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
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls1qrn: {
    title: 'L-Layout Style 1 - Quran Verse ',
    description: 'Quran Verse - L-Layout Style 1',
    layout: 'l-layout',
    style: 1,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#FCD29A',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
            {
              verse:
                'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
              translation:
                'O you who have believed, fear Allah as He should be feared and do not die except as Muslims [in submission to Him]. (Q.S Al-Imran : 102)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  // L-Layout Style 2
  lls2npt: {
    title: 'L-Layout Style 2 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle2LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2img: {
    title: 'L-Layout Style 2 - Images',
    description: 'Images - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle2LLayout,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2vid: {
    title: 'L-Layout Style 2 - Video',
    description: 'Video - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2ant: {
    title: 'L-Layout Style 2 - Announcements ( Text )',
    description: 'Announcements ( Text ) - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2ani: {
    title: 'L-Layout Style 2 - Announcements ( Image )',
    description: 'Announcements ( Image ) - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2anv: {
    title: 'L-Layout Style 2 - Announcements ( Video )',
    description: 'Announcements ( Video ) - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle2LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle2LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls2qrn: {
    title: 'L-Layout Style 2 - Quran Verse',
    description: 'Quran Verse - L-Layout Style 2',
    layout: 'l-layout',
    style: 2,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle2LLayout,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle2LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle2LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  // L-Layout Style 3
  lls3npt: {
    title: 'L-Layout Style 3 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3img: {
    title: 'L-Layout Style 3 - Images',
    description: 'Images - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3vid: {
    title: 'L-Layout Style 3 - Video',
    description: 'Video - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3ant: {
    title: 'L-Layout Style 3 - Announcements ( Text )',
    description: 'Announcements ( Text ) - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3ani: {
    title: 'L-Layout Style 3 - Announcements ( Image )',
    description: 'Announcements ( Image ) - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3anv: {
    title: 'L-Layout Style 3 - Announcements ( Video )',
    description: 'Announcements ( Video ) - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
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
              target_location: 'inside' as const,
              target_user: 'all' as const,
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
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: null,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls3qrn: {
    title: 'L-Layout Style 3 - Quran Verse',
    description: 'Quran Verse - L-Layout Style 3',
    layout: 'l-layout',
    style: 3,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        themeColor: '#0950A1',
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  // L-Layout Style 4
  lls4npt: {
    title: 'L-Layout Style 4 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle4LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4img: {
    title: 'L-Layout Style 4 - Images',
    description: 'Images - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle4LLayout,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4vid: {
    title: 'L-Layout Style 4 - Video',
    description: 'Video - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4ant: {
    title: 'L-Layout Style 4 - Announcements ( Text )',
    description: 'Announcements ( Text ) - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4ani: {
    title: 'L-Layout Style 4 - Announcements ( Image )',
    description: 'Announcements ( Image ) - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4anv: {
    title: 'L-Layout Style 4 - Announcements ( Video )',
    description: 'Announcements ( Video ) - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle4LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle4LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls4qrn: {
    title: 'L-Layout Style 4 - Quran Verse',
    description: 'Quran Verse - L-Layout Style 4',
    layout: 'l-layout',
    style: 4,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#ffffff',
        secondaryColor: '#1A1A1A',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle4LLayout,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle4LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle4LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  // L-Layout Style 5
  lls5npt: {
    title: 'L-Layout Style 5 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5img: {
    title: 'L-Layout Style 5 - Images',
    description: 'Images - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: HeroImageStyle56LLayout,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5vid: {
    title: 'L-Layout Style 5 - Video',
    description: 'Video - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5ant: {
    title: 'L-Layout Style 5 - Announcements ( Text )',
    description: 'Announcements ( Text ) - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5ani: {
    title: 'L-Layout Style 5 - Announcements ( Image )',
    description: 'Announcements ( Image ) - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5anv: {
    title: 'L-Layout Style 5 - Announcements ( Video )',
    description: 'Announcements ( Video ) - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls5qrn: {
    title: 'L-Layout Style 5 - Quran Verse',
    description: 'Quran Verse - L-Layout Style 5',
    layout: 'l-layout',
    style: 5,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  // L-Layout Style 6
  lls6npt: {
    title: 'L-Layout Style 6 - Next Prayer Times',
    description: 'Next Prayer Times - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Next Prayer Times' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6img: {
    title: 'L-Layout Style 6 - Images',
    description: 'Images - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Images' as const,
      mainContentData: {
        announcementData: null,
        imageData: {
          image: ImageMosque4,
        },
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6vid: {
    title: 'L-Layout Style 6 - Video',
    description: 'Video - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Videos' as const,
      mainContentData: {
        announcementData: null,
        imageData: null,
        videoData: {
          video: SampleVideo,
        },
        quranData: null,
        backgroundColor: null,
        backgroundImage: null,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: ImageMosque1,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
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
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6ant: {
    title: 'L-Layout Style 6 - Announcements ( Text )',
    description: 'Announcements ( Text ) - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'text' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6ani: {
    title: 'L-Layout Style 6 - Announcements ( Image )',
    description: 'Announcements ( Image ) - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'image' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6anv: {
    title: 'L-Layout Style 6 - Announcements ( Video )',
    description: 'Announcements ( Video ) - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Announcements' as const,
      mainContentData: {
        announcementData: {
          announcementType: 'video' as const,
          announcements: [
            {
              id: 'ann-001',
              title: 'Friday Khutbah Reminder',
              content:
                'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
              video: SampleVideo,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-28',
              date_schedule_to: '2025-08-29',
              target_location: 'inside' as const,
              target_user: 'all' as const,
              created_at: '2025-08-20T09:30:00Z',
              updated_at: '2025-08-21T11:15:00Z',
            },
            {
              id: 'ann-002',
              title: 'Community Clean-up Day',
              content:
                'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
              video: null,
              image: HeroImageStyle56LLayout,
              date_schedule_from: '2025-08-31',
              date_schedule_to: '2025-08-31',
              target_location: 'outside' as const,
              target_user: 'adult' as const,
              created_at: '2025-08-19T08:00:00Z',
              updated_at: '2025-08-19T08:00:00Z',
            },
          ],
        },
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: null,
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
  lls6qrn: {
    title: 'L-Layout Style 6 - Quran Verse',
    description: 'Quran Verse - L-Layout Style 6',
    layout: 'l-layout',
    style: 6,
    content: {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: {
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
      },
      selectedContent: 'Quran Verse' as const,
      mainContentData: {
        announcementData: null,
        imageData: HeroImageStyle56LLayout,
        videoData: null,
        quranData: {
          quran: [
            {
              verse:
                'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
              translation:
                'And seek help through patience and prayer. Indeed, it is a burden except for the humble (Q.S Al-Baqarah : 45)',
            },
            {
              verse:
                'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ',
              translation:
                'Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. (Q.S Al-Baqarah : 286)',
            },
          ],
        },
        backgroundColor: null,
        backgroundImage: HeroImageStyle56LLayout,
      },
      subContentData: [
        {
          id: 'ann-001',
          title: 'Friday Khutbah Reminder',
          content:
            'Join us this Friday for the weekly khutbah. Topic: Building Strong Families in Islam.',
          video: SampleVideo,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-28',
          date_schedule_to: '2025-08-29',
          target_location: 'inside' as const,
          target_user: 'all' as const,
          created_at: '2025-08-20T09:30:00Z',
          updated_at: '2025-08-21T11:15:00Z',
        },
        {
          id: 'ann-002',
          title: 'Community Clean-up Day',
          content:
            'Masjid Al-Falah invites all members to join the mosque cleaning event this Sunday morning.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
        {
          id: 'ann-003',
          title: 'Eid al-Fitr',
          content: 'The Preyer Eid al-Fitr will take place on Sunday.',
          video: null,
          image: HeroImageStyle56LLayout,
          date_schedule_from: '2025-08-31',
          date_schedule_to: '2025-08-31',
          target_location: 'outside' as const,
          target_user: 'adult' as const,
          created_at: '2025-08-19T08:00:00Z',
          updated_at: '2025-08-19T08:00:00Z',
        },
      ],
    },
  },
};
