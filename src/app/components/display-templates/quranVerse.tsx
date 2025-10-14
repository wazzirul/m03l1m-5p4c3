'use client';

import IconPersonPray from '@/assets/icons/icon-person-pray.svg';
import { pxtoVw } from '@/utils/viewport';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';

// Skeleton component for QuranVerse
function QuranVerseSkeleton({
  colors,
  className = '',
}: {
  colors?: {
    themeColor?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
  };
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col w-full m-auto items-center justify-center text-center z-10 animate-pulse ${className}`}
      style={{
        gap: `${pxtoVw(32)}`,
        maxWidth: `${pxtoVw(855)}`,
      }}
    >
      {/* Icon skeleton */}
      <div
        className="bg-gray-300 rounded-full"
        style={{
          width: `${pxtoVw(129)}`,
          height: `${pxtoVw(129)}`,
        }}
      />

      {/* Verse content skeleton */}
      <div className="flex flex-col w-full" style={{ gap: `${pxtoVw(24)}` }}>
        {/* Arabic verse skeleton - multiple lines */}
        <div
          className="flex flex-col items-center"
          style={{ gap: `${pxtoVw(16)}` }}
        >
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(700)}`,
              height: `${pxtoVw(40)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(600)}`,
              height: `${pxtoVw(40)}`,
            }}
          />
        </div>

        {/* Translation skeleton - multiple lines */}
        <div
          className="flex flex-col items-center"
          style={{ gap: `${pxtoVw(8)}` }}
        >
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(650)}`,
              height: `${pxtoVw(28)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(550)}`,
              height: `${pxtoVw(28)}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface QuranProps {
  verse: string;
  translation: string;
}

interface QuranVerseProps {
  quran: QuranProps[];
  colors?: {
    themeColor?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
  };
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
}

export default function QuranVerse({
  quran,
  colors = {
    primaryColor: '#1a1a1a',
    secondaryColor: '#ffffff',
  },
  loadingDelay = 500, // Default 500ms loading delay
}: QuranVerseProps) {
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  useEffect(() => {
    if (!isLoading && swiperRef.current) {
      const forceHeightUpdate = () => {
        if (swiperRef.current) {
          const swiper = swiperRef.current;
          if (
            swiper.wrapperEl &&
            swiper.slides &&
            swiper.slides[swiper.activeIndex]
          ) {
            const activeSlide = swiper.slides[swiper.activeIndex];
            const slideHeight = activeSlide.offsetHeight;
            swiper.wrapperEl.style.height = `${slideHeight}px`;
          }
        }
      };

      const timers = [
        setTimeout(forceHeightUpdate, 200),
        setTimeout(forceHeightUpdate, 400),
      ];

      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [isLoading]);

  if (isLoading) {
    return <QuranVerseSkeleton colors={colors} />;
  }
  return (
    <div
      className="flex flex-col w-full m-auto items-center justify-center text-center z-10"
      style={{
        gap: `${pxtoVw(24)}`,
        maxWidth: `${pxtoVw(855)}`,
      }}
    >
      <IconPersonPray
        style={{
          width: `${pxtoVw(129)}`,
          height: 'auto',
          color: colors?.primaryColor || '#1a1a1a',
        }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 300000, // 5minutes
          disableOnInteraction: false,
        }}
        loop={quran.length > 1}
        allowTouchMove={false}
        autoHeight={true}
        onSwiper={(swiper) => {
          const forceUpdate = () => {
            if (
              swiper.wrapperEl &&
              swiper.slides &&
              swiper.slides[swiper.activeIndex]
            ) {
              const activeSlide = swiper.slides[swiper.activeIndex];
              const slideHeight = activeSlide.offsetHeight;
              swiper.wrapperEl.style.height = `${slideHeight}px`;
            }
          };

          setTimeout(forceUpdate, 200);
          setTimeout(forceUpdate, 400);
        }}
        className="w-full"
      >
        {quran.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col" style={{ gap: `${pxtoVw(8)}` }}>
              <p
                className="font-bold leading-[2] font-noto-sans-arabic"
                style={{
                  fontSize: `${pxtoVw(40)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  letterSpacing: `${pxtoVw(-0.2)}`,
                }}
              >
                {item.verse}
              </p>
              <p
                className="font-medium leading-[1.71] italic"
                style={{
                  fontSize: `${pxtoVw(28)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  letterSpacing: `${pxtoVw(-0.28)}`,
                }}
              >
                {item.translation}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
