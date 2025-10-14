'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import SmallMosqueIcon from '@/assets/images/styles/mosque-icon.png';
import { toHijri } from '@/utils/hijri';
import { pxToRem } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';

// Skeleton component
function MosqueNameClockDatePreviewSkeleton({
  colors,
  typeLayout,
}: {
  colors?: colorProps;
  typeLayout?: 'default' | 'table' | 'l-layout';
}) {
  const defaultStyles = {
    boxShadow: `0 ${pxToRem(10)} ${pxToRem(9)} 0 rgba(0, 0, 0, 0.05)`,
  };

  const tableStyles = {
    boxShadow: 'none',
  };

  const lLayoutStyles = {
    boxShadow: 'none',
  };

  const appliedStyles =
    typeLayout === 'table'
      ? tableStyles
      : typeLayout === 'l-layout'
      ? lLayoutStyles
      : defaultStyles;

  // Fixed: Add proper background color for dark mode
  const backgroundColor =
    colors?.primaryColor === '#ffffff'
      ? '#1A1A1A' // Dark mode background
      : colors?.secondaryColor || '#ffffff'; // Light mode background

  return (
    <div
      className="w-full h-full rounded-xl flex flex-col items-center animate-pulse"
      style={{
        padding: `${pxToRem(16)} ${pxToRem(16)} ${pxToRem(2)}`,
        gap: pxToRem(4),
        backgroundColor: backgroundColor,
        alignItems: typeLayout === 'l-layout' ? 'flex-start' : 'center',
        ...appliedStyles,
      }}
    >
      {/* Show mosque icon and name only for default and table layouts */}
      {typeLayout !== 'l-layout' && (
        <div
          className="flex items-center justify-center"
          style={{
            paddingTop: pxToRem(6),
            gap: pxToRem(4),
          }}
        >
          {/* Skeleton icon */}
          <div
            className="bg-gray-300 rounded-full"
            style={{
              width: `${pxToRem(30)}`,
              height: `${pxToRem(27)}`,
            }}
          />
          {/* Skeleton mosque name */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(24)}`,
            }}
          />
        </div>
      )}

      {/* Skeleton clock */}
      <div
        className="bg-gray-300 rounded-xl"
        style={{
          width: `${pxToRem(180)}`,
          height: `${pxToRem(70)}`,
          marginTop: typeLayout === 'l-layout' ? pxToRem(0) : pxToRem(8),
          alignSelf: typeLayout === 'l-layout' ? 'flex-start' : 'center',
        }}
      />

      {/* Skeleton dates */}
      {typeLayout === 'l-layout' ? (
        <>
          {/* Skeleton gregorian date */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(300)}`,
              height: `${pxToRem(40)}`,
              marginTop: pxToRem(4),
              alignSelf: 'flex-start',
            }}
          />
          {/* Skeleton hijri date */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(40)}`,
              marginTop: pxToRem(2),
              alignSelf: 'flex-start',
            }}
          />
        </>
      ) : (
        <div
          className="bg-gray-300 rounded-xl"
          style={{
            width: `${pxToRem(280)}`,
            height: `${pxToRem(22)}`,
            marginTop: pxToRem(4),
          }}
        />
      )}
    </div>
  );
}

interface colorProps {
  themeColor?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface MosqueNameClockDatePreviewProps {
  mosqueImage?: string | StaticImageData;
  mosqueName?: string;
  colors?: colorProps;
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
  typeLayout?: 'default' | 'table' | 'l-layout'; // Updated prop for layout type
}

export default function MosqueNameClockDatePreview({
  mosqueImage,
  mosqueName = 'Mosque Name',
  colors,
  loadingDelay = 500, // Default 500ms loading delay
  typeLayout = 'default', // Default layout type
}: MosqueNameClockDatePreviewProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState({
    gregorian: '',
    hijri: '',
    gregorianLLayout: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Loading effect with delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  // DateTime update effect
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Update time
      const timeFormatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeFormatted);

      // Update date
      const gFormatted = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      const gFormattedLLayout = `${now.toLocaleDateString('en-US', {
        weekday: 'short',
      })} ${now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}`;
      const hFormatted = toHijri(now);

      setCurrentDate({
        gregorian: gFormatted,
        hijri: hFormatted,
        gregorianLLayout: gFormattedLLayout,
      });
    };

    // Update immediately
    updateDateTime();

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Image loading handler
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Show skeleton while loading
  if (isLoading) {
    return (
      <MosqueNameClockDatePreviewSkeleton
        colors={colors}
        typeLayout={typeLayout}
      />
    );
  }

  // Style configuration based on typeLayout
  const defaultStyles = {
    boxShadow: `0 ${pxToRem(10)} ${pxToRem(9)} 0 rgba(0, 0, 0, 0.05)`,
    opacity: imageLoaded || !mosqueImage ? 1 : 0.7,
  };

  const tableStyles = {
    boxShadow: 'none',
    opacity: 1,
  };

  const lLayoutStyles = {
    boxShadow: 'none',
    opacity: 1,
  };

  const appliedStyles =
    typeLayout === 'table'
      ? tableStyles
      : typeLayout === 'l-layout'
      ? lLayoutStyles
      : defaultStyles;

  // Fixed: Add proper background color for dark mode
  const backgroundColor =
    colors?.primaryColor === '#ffffff'
      ? '#1A1A1A' // Dark mode background
      : colors?.secondaryColor || '#ffffff'; // Light mode background

  return (
    <div
      className="w-full h-full rounded-xl flex flex-col transition-opacity duration-300 ease-in-out"
      style={{
        padding: `${pxToRem(16)} ${pxToRem(16)} ${pxToRem(2)}`,
        gap: typeLayout === 'l-layout' ? pxToRem(4) : pxToRem(8),
        backgroundColor: backgroundColor,
        alignItems: typeLayout === 'l-layout' ? 'flex-start' : 'center',
        ...appliedStyles,
      }}
    >
      {/* mosque icon and name - hidden for l-layout */}
      {typeLayout !== 'l-layout' && (
        <div
          className="flex items-center justify-center"
          style={{
            paddingTop: pxToRem(6),
            gap: pxToRem(4),
          }}
        >
          {mosqueImage ? (
            <div className="relative">
              {!imageLoaded && (
                <div
                  className="absolute inset-0 bg-gray-300 rounded animate-pulse"
                  style={{
                    width: `${pxToRem(30)}`,
                    height: `${pxToRem(30)}`,
                  }}
                />
              )}
              <Image
                alt="small icon"
                src={mosqueImage}
                width={100}
                height={100}
                className={`object-contain transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  maxWidth: `${pxToRem(30)}`,
                  maxHeight: `${pxToRem(30)}`,
                }}
                onLoad={handleImageLoad}
                loading="lazy"
                priority={false}
              />
            </div>
          ) : (
            <Image
              alt="small icon"
              src={SmallMosqueIcon}
              width={53}
              height={54}
              style={{ width: `${pxToRem(30)}`, height: `${pxToRem(27)}` }}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          )}
          <p
            className="relative font-medium leading-[1.4] text-left transition-opacity duration-300"
            style={{
              fontSize: `${pxToRem(20)}`,
              maxWidth: `${pxToRem(300)}`,
              top: `${pxToRem(2)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
            }}
          >
            {mosqueName}
          </p>
        </div>
      )}

      {/* current clock */}
      <div
        className="font-semibold leading-[1] transition-all duration-300 ease-in-out"
        style={{
          fontSize:
            typeLayout === 'l-layout' ? `${pxToRem(80)}` : `${pxToRem(70)}`,
          letterSpacing:
            typeLayout === 'l-layout'
              ? `${pxToRem(-0.8)}`
              : `${pxToRem(-0.72)}`,
          lineHeight: typeLayout === 'l-layout' ? 'normal' : '1',
          color: colors?.primaryColor || '#1a1a1a',
          opacity: currentTime ? 1 : 0,
          transform: currentTime ? 'translateY(0)' : 'translateY(10px)',
          textAlign: typeLayout === 'l-layout' ? 'left' : 'center',
          alignSelf: typeLayout === 'l-layout' ? 'flex-start' : 'center',
        }}
      >
        {currentTime}
      </div>

      {/* date hijri / masehi */}
      {typeLayout === 'l-layout' ? (
        <div className="flex flex-col" style={{ gap: pxToRem(4) }}>
          <div
            className="font-bold leading-[1.4] text-left transition-all duration-300 ease-in-out"
            style={{
              fontSize: `${pxToRem(40)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 1),
            }}
          >
            {currentDate.gregorianLLayout}
          </div>
          <div
            className="font-medium leading-[1.2] text-left transition-all duration-300 ease-in-out"
            style={{
              fontSize: `${pxToRem(40)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
            }}
          >
            {currentDate.hijri}
          </div>
        </div>
      ) : (
        <div
          className="font-medium leading-[1.1] text-center transition-all duration-300 ease-in-out"
          style={{
            fontSize: `${pxToRem(22)}`,
            letterSpacing: `${pxToRem(-0.4)}`,
            color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
            opacity: currentDate.gregorian ? 1 : 0,
            transform: currentDate.gregorian
              ? 'translateY(0)'
              : 'translateY(10px)',
          }}
        >
          {currentDate.gregorian} / {currentDate.hijri}
        </div>
      )}
    </div>
  );
}
