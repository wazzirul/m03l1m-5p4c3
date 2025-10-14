'use client';

import IconPersonPray from '@/assets/icons/icon-person-pray.svg';
import { pxToRem } from '@/utils/viewport';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';

function QuranVersePreviewSkeleton({
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
        gap: `${pxToRem(32)}`,
        maxWidth: `${pxToRem(855)}`,
      }}
    >
      {/* Icon skeleton */}
      <div
        className="bg-gray-300 rounded-full"
        style={{
          width: `${pxToRem(129)}`,
          height: `${pxToRem(129)}`,
        }}
      />

      {/* Verse content skeleton */}
      <div className="flex flex-col w-full" style={{ gap: `${pxToRem(24)}` }}>
        {/* Arabic verse skeleton - multiple lines */}
        <div
          className="flex flex-col items-center"
          style={{ gap: `${pxToRem(16)}` }}
        >
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(700)}`,
              height: `${pxToRem(40)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(600)}`,
              height: `${pxToRem(40)}`,
            }}
          />
        </div>

        {/* Translation skeleton - multiple lines */}
        <div
          className="flex flex-col items-center"
          style={{ gap: `${pxToRem(8)}` }}
        >
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(650)}`,
              height: `${pxToRem(28)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(550)}`,
              height: `${pxToRem(28)}`,
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

interface QuranVersePreviewProps {
  quran: QuranProps[];
  colors?: {
    themeColor?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
  };
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
}

export default function QuranVersePreview({
  quran,
  colors = {
    primaryColor: '#1a1a1a',
    secondaryColor: '#ffffff',
  },
  loadingDelay = 500, // Default 500ms loading delay
}: QuranVersePreviewProps) {
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
    return <QuranVersePreviewSkeleton colors={colors} />;
  }
  return (
    <div
      className="flex flex-col w-full m-auto items-center justify-center text-center z-10"
      style={{
        gap: `${pxToRem(24)}`,
        maxWidth: `${pxToRem(855)}`,
      }}
    >
      <IconPersonPray
        style={{
          width: `${pxToRem(129)}`,
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
            <div className="flex flex-col" style={{ gap: `${pxToRem(8)}` }}>
              <p
                className="font-bold leading-[2] font-noto-sans-arabic"
                style={{
                  fontSize: `${pxToRem(40)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  letterSpacing: `${pxToRem(-0.2)}`,
                }}
              >
                {item.verse}
              </p>
              <p
                className="font-medium leading-[1.71] italic"
                style={{
                  fontSize: `${pxToRem(28)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  letterSpacing: `${pxToRem(-0.28)}`,
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
