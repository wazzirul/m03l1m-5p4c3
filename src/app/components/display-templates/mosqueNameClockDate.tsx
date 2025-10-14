'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import SmallMosqueIcon from '@/assets/images/styles/mosque-icon.png';
import { toHijri } from '@/utils/hijri';
import { pxtoVw } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';

// Skeleton component
function MosqueNameClockDateSkeleton({
  colors,
  typeLayout,
}: {
  colors?: colorProps;
  typeLayout?: 'default' | 'table' | 'l-layout';
}) {
  const defaultStyles = {
    boxShadow: `0 ${pxtoVw(10)} ${pxtoVw(9)} 0 rgba(0, 0, 0, 0.05)`,
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
        padding: `${pxtoVw(16)} ${pxtoVw(16)} ${pxtoVw(2)}`,
        gap: pxtoVw(4),
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
            paddingTop: pxtoVw(6),
            gap: pxtoVw(4),
          }}
        >
          {/* Skeleton icon */}
          <div
            className="bg-gray-300 rounded-full"
            style={{
              width: `${pxtoVw(30)}`,
              height: `${pxtoVw(27)}`,
            }}
          />
          {/* Skeleton mosque name */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(200)}`,
              height: `${pxtoVw(24)}`,
            }}
          />
        </div>
      )}

      {/* Skeleton clock */}
      <div
        className="bg-gray-300 rounded-xl"
        style={{
          width: `${pxtoVw(180)}`,
          height: `${pxtoVw(70)}`,
          marginTop: typeLayout === 'l-layout' ? pxtoVw(0) : pxtoVw(8),
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
              width: `${pxtoVw(300)}`,
              height: `${pxtoVw(40)}`,
              marginTop: pxtoVw(4),
              alignSelf: 'flex-start',
            }}
          />
          {/* Skeleton hijri date */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxtoVw(200)}`,
              height: `${pxtoVw(40)}`,
              marginTop: pxtoVw(2),
              alignSelf: 'flex-start',
            }}
          />
        </>
      ) : (
        <div
          className="bg-gray-300 rounded-xl"
          style={{
            width: `${pxtoVw(280)}`,
            height: `${pxtoVw(22)}`,
            marginTop: pxtoVw(4),
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

interface MosqueNameClockDateProps {
  mosqueImage?: string | StaticImageData;
  mosqueName?: string;
  colors?: colorProps;
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
  typeLayout?: 'default' | 'table' | 'l-layout'; // Updated prop for layout type
}

export default function MosqueNameClockDate({
  mosqueImage,
  mosqueName = 'Mosque Name',
  colors,
  loadingDelay = 500, // Default 500ms loading delay
  typeLayout = 'default', // Default layout type
}: MosqueNameClockDateProps) {
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
      <MosqueNameClockDateSkeleton colors={colors} typeLayout={typeLayout} />
    );
  }

  // Style configuration based on typeLayout
  const defaultStyles = {
    boxShadow: `0 ${pxtoVw(10)} ${pxtoVw(9)} 0 rgba(0, 0, 0, 0.05)`,
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
        padding: `${pxtoVw(16)} ${pxtoVw(16)} ${pxtoVw(2)}`,
        gap: typeLayout === 'l-layout' ? pxtoVw(4) : pxtoVw(8),
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
            paddingTop: pxtoVw(6),
            gap: pxtoVw(4),
          }}
        >
          {mosqueImage ? (
            <div className="relative">
              {!imageLoaded && (
                <div
                  className="absolute inset-0 bg-gray-300 rounded animate-pulse"
                  style={{
                    width: `${pxtoVw(30)}`,
                    height: `${pxtoVw(30)}`,
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
                  maxWidth: `${pxtoVw(30)}`,
                  maxHeight: `${pxtoVw(30)}`,
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
              style={{ width: `${pxtoVw(30)}`, height: `${pxtoVw(27)}` }}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          )}
          <p
            className="relative font-medium leading-[1.4] text-left transition-opacity duration-300"
            style={{
              fontSize: `${pxtoVw(20)}`,
              maxWidth: `${pxtoVw(300)}`,
              top: `${pxtoVw(2)}`,
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
            typeLayout === 'l-layout' ? `${pxtoVw(80)}` : `${pxtoVw(70)}`,
          letterSpacing:
            typeLayout === 'l-layout' ? `${pxtoVw(-0.8)}` : `${pxtoVw(-0.72)}`,
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
        <div className="flex flex-col" style={{ gap: pxtoVw(4) }}>
          <div
            className="font-bold leading-[1.4] text-left transition-all duration-300 ease-in-out"
            style={{
              fontSize: `${pxtoVw(40)}`,
              color: hexToRgba(colors?.primaryColor || '#1a1a1a', 1),
            }}
          >
            {currentDate.gregorianLLayout}
          </div>
          <div
            className="font-medium leading-[1.2] text-left transition-all duration-300 ease-in-out"
            style={{
              fontSize: `${pxtoVw(40)}`,
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
            fontSize: `${pxtoVw(22)}`,
            letterSpacing: `${pxtoVw(-0.4)}`,
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
