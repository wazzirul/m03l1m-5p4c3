'use client';

import React, { useState, useEffect } from 'react';
import IconFajr from '@/assets/icons/icon-fajr.svg';
import IconSunrise from '@/assets/icons/icon-sunrise.svg';
import IconZuhr from '@/assets/icons/icon-zuhr.svg';
import IconMaghrib from '@/assets/icons/icon-maghrib.svg';
import IconIsya from '@/assets/icons/icon-isya.svg';
import { pxToRem } from '@/utils/viewport';

// Skeleton component for PrayerTimesBottom
function PrayerTimesBottomSkeletonPreview({
  colors,
  className = '',
}: {
  colors?: colorProps;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-full rounded-xl grid grid-cols-7 animate-pulse ${className}`}
      style={{
        boxShadow: `0 ${pxToRem(10)} ${pxToRem(9)} 0 rgba(0, 0, 0, 0.05)`,
        gap: `${pxToRem(8)}`,
        padding: `${pxToRem(8)}`,
        backgroundColor: colors?.secondaryColor || '#ffffff',
      }}
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center"
          style={{
            padding: `${pxToRem(12)}`,
            gap: `${pxToRem(8)}`,
          }}
        >
          {/* Icon and name skeleton */}
          <div
            className="flex items-center justify-center"
            style={{ gap: `${pxToRem(10)}` }}
          >
            {/* Icon skeleton */}
            <div
              className="bg-gray-300 rounded-full"
              style={{
                width: `${pxToRem(40)}`,
                height: `${pxToRem(40)}`,
              }}
            />
            {/* Prayer name skeleton */}
            <div
              className="bg-gray-300 rounded-xl"
              style={{
                width: `${pxToRem(60)}`,
                height: `${pxToRem(32)}`,
              }}
            />
          </div>

          {/* Scheduled time skeleton */}
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(120)}`,
              height: `${pxToRem(28)}`,
            }}
          />

          {/* Iqamah time skeleton */}
          <div
            className="bg-gray-300 rounded-xl w-full"
            style={{
              height: `${pxToRem(48)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

interface PrayerTime {
  name: string;
  scheduledTime: string;
  iqamahTime: string;
  isActive?: boolean;
  isJumuah?: boolean;
}

interface colorProps {
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface PrayerTimesBottomPreviewProps {
  prayerTimes: PrayerTime[];
  className?: string;
  colors?: colorProps;
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
}

const PrayerTimesBottomPreview: React.FC<PrayerTimesBottomPreviewProps> = ({
  prayerTimes,
  className = '',
  colors,
  loadingDelay = 500, // Default 500ms loading delay
}) => {
  const [activePrayerTimes, setActivePrayerTimes] =
    useState<PrayerTime[]>(prayerTimes);
  const [isLoading, setIsLoading] = useState(true);

  // Function to convert time string to minutes since midnight
  const timeToMinutes = (timeStr: string): number => {
    if (timeStr === '-') return -1;

    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;

    if (period === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (period === 'AM' && hours === 12) {
      totalMinutes = minutes;
    }

    return totalMinutes;
  };

  // Function to find the current active prayer
  const findActivePrayer = (): string | null => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const isFriday = now.getDay() === 5; // 5 = Friday

    // Include all prayers and convert to minutes
    const allPrayers = prayerTimes
      .filter((prayer) => prayer.scheduledTime !== '-')
      .map((prayer) => ({
        ...prayer,
        timeInMinutes: timeToMinutes(prayer.scheduledTime),
      }))
      .sort((a, b) => a.timeInMinutes - b.timeInMinutes);

    // Find which prayer period we're currently in
    let activePrayer = null;

    // Check each prayer to see if we're in its time period
    for (let i = 0; i < allPrayers.length; i++) {
      const currentPrayer = allPrayers[i];
      const nextPrayer = allPrayers[i + 1];

      // If we're at or after this prayer time
      if (currentMinutes >= currentPrayer.timeInMinutes) {
        // If there's no next prayer, or we're before the next prayer
        if (!nextPrayer || currentMinutes < nextPrayer.timeInMinutes) {
          // We're in this prayer's time period
          activePrayer = currentPrayer.name;

          // Handle Zuhr/Jumuah conflict based on day
          if (activePrayer === 'Jumuah 1' && !isFriday) {
            // On non-Friday, prefer Zuhr over Jumuah if both are in same time period
            const zuhrPrayer = allPrayers.find((p) => p.name === 'Zuhr');
            if (zuhrPrayer && currentMinutes >= zuhrPrayer.timeInMinutes) {
              activePrayer = 'Zuhr';
            }
          } else if (activePrayer === 'Zuhr' && isFriday) {
            // On Friday, prefer Jumuah over Zuhr if both are in same time period
            const jumuahPrayer = allPrayers.find((p) =>
              p.name.toLowerCase().includes('jumuah')
            );
            if (jumuahPrayer && currentMinutes >= jumuahPrayer.timeInMinutes) {
              activePrayer = jumuahPrayer.name;
            }
          }

          break;
        }
      }
    }

    // If no active prayer found and we're before the first prayer of the day
    if (!activePrayer && allPrayers.length > 0) {
      // Return the last prayer from previous day
      const lastPrayer = allPrayers[allPrayers.length - 1];
      activePrayer = lastPrayer.name;
    }

    return activePrayer;
  };

  // Loading effect with delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  // Update active prayer state
  useEffect(() => {
    const updateActivePrayer = () => {
      const now = new Date();
      const isFriday = now.getDay() === 5; // 5 = Friday
      const activePrayerName = findActivePrayer();

      console.log('Current time:', now.getHours() + ':' + now.getMinutes());
      console.log('Active prayer name:', activePrayerName);
      console.log('Is Friday:', isFriday);

      // Show all prayers but set active state based on Friday logic
      const updatedPrayerTimes = prayerTimes.map((prayer) => {
        let isActive = prayer.name === activePrayerName;

        // Apply day-specific exclusions
        if (isActive) {
          // On Friday: Zuhr cannot be active
          if (isFriday && prayer.name === 'Zuhr') {
            isActive = false;
          }
          // On other days: Jumuah cannot be active
          else if (!isFriday && prayer.name.toLowerCase().includes('jumuah')) {
            isActive = false;
          }
        }

        return {
          ...prayer,
          isActive,
        };
      });

      setActivePrayerTimes(updatedPrayerTimes);
    };

    // Initial update
    updateActivePrayer();

    // Update every minute
    const interval = setInterval(updateActivePrayer, 60000);

    return () => clearInterval(interval);
  }, [prayerTimes]);

  const getIcon = (prayerName: string) => {
    const iconProps = {
      style: {
        width: `${pxToRem(48)}`,
        height: `${pxToRem(48)}`,
      },
    };

    switch (prayerName.toLowerCase()) {
      case 'fajr':
        return (
          <IconFajr
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            {...iconProps}
          />
        );
      case 'sunrise':
        return (
          <IconSunrise
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            {...iconProps}
          />
        );
      case 'zuhr':
      case 'jumuah 1':
        return (
          <IconZuhr
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            {...iconProps}
          />
        );
      case 'ashr':
        return (
          <IconFajr
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      case 'maghrib':
        return (
          <IconMaghrib
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      case "isya'":
        return (
          <IconIsya
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      default:
        return (
          <IconFajr
            className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
            {...iconProps}
          />
        );
    }
  };

  // Show skeleton while loading
  if (isLoading) {
    return (
      <PrayerTimesBottomSkeletonPreview colors={colors} className={className} />
    );
  }

  const renderPrayerColumn = (prayer: PrayerTime, index: number) => {
    const isActive = prayer.isActive;
    const textColor = isActive ? 'text-[#FFFFFF]' : '';
    const iconColor = isActive ? 'text-[#FFFFFF]' : '';

    const columnStyle = isActive
      ? {
          padding: `${pxToRem(12)}`,
          gap: `${pxToRem(8)}`,
          borderRadius: `${pxToRem(12)}`,
          background: colors?.primaryColor || '#1a1a1a',
          transition: 'all 0.3s ease-in-out',
        }
      : {
          padding: `${pxToRem(12)}`,
          gap: `${pxToRem(8)}`,
          transition: 'all 0.3s ease-in-out',
        };

    const iqamahStyle = isActive
      ? {
          fontSize: `${pxToRem(24)}`,
          color: colors?.primaryColor || '#1a1a1a',
          letterSpacing: `${pxToRem(-0.24)}`,
          padding: `${pxToRem(12)} ${pxToRem(16)}`,
          borderRadius: `${pxToRem(10)}`,
          background: colors?.secondaryColor || '#ffffff',
          boxShadow: `0 0 0 ${pxToRem(1)} rgba(0, 0, 0, 0.25)`,
          transition: 'all 0.3s ease-in-out',
        }
      : {
          fontSize: `${pxToRem(24)}`,
          color: colors?.secondaryColor || '#ffffff',
          letterSpacing: `${pxToRem(-0.24)}`,
          padding: `${pxToRem(12)} ${pxToRem(16)}`,
          borderRadius: `${pxToRem(10)}`,
          background: colors?.primaryColor || '#1a1a1a',
          transition: 'all 0.3s ease-in-out',
        };

    const iconProps = {
      style: {
        width: `${pxToRem(48)}`,
        height: `${pxToRem(48)}`,
      },
    };

    return (
      <div
        key={index}
        className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
        style={columnStyle}
      >
        <div
          className="flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            gap: `${prayer.name === 'Jumuah 1' ? pxToRem(4) : pxToRem(10)}`,
          }}
        >
          {React.cloneElement(getIcon(prayer.name), {
            style: {
              ...iconProps.style,
              color: isActive
                ? colors?.secondaryColor || '#ffffff'
                : colors?.primaryColor || '#1a1a1a',
              transition: 'all 0.3s ease-in-out',
            },
          })}
          <p
            className={`leading-[0.875] ${textColor} font-outfit ${
              prayer.name === 'Jumuah 1' ? 'w-max' : ''
            } transition-all duration-300 ease-in-out`}
            style={{
              fontSize: `${pxToRem(32)}`,
              letterSpacing: `${pxToRem(-0.32)}`,
              color: isActive
                ? colors?.secondaryColor || '#ffffff'
                : colors?.primaryColor || '#1a1a1a',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {prayer.name}
          </p>
        </div>
        <div
          className={`font-semibold leading-[1.28] ${textColor} tracking-[-0.28px] transition-all duration-300 ease-in-out`}
          style={{
            fontSize: `${pxToRem(28)}`,
            color: isActive
              ? colors?.secondaryColor || '#ffffff'
              : colors?.primaryColor || '#1a1a1a',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {prayer.scheduledTime}
        </div>
        <div
          className="flex items-center justify-center font-bold leading-[1] w-full transition-all duration-300 ease-in-out"
          style={iqamahStyle}
        >
          {prayer.iqamahTime}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-full h-full rounded-xl grid grid-cols-7 transition-opacity duration-300 ease-in-out ${className}`}
      style={{
        boxShadow: `0 ${pxToRem(10)} ${pxToRem(9)} 0 rgba(0, 0, 0, 0.05)`,
        gap: `${pxToRem(8)}`,
        padding: `${pxToRem(8)}`,
        backgroundColor: colors?.secondaryColor || '#ffffff',
        opacity: activePrayerTimes.length > 0 ? 1 : 0.8,
      }}
    >
      {activePrayerTimes.map((prayer, index) =>
        renderPrayerColumn(prayer, index)
      )}
    </div>
  );
};

export default PrayerTimesBottomPreview;
