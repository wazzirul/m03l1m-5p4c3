'use client';

import { useState, useEffect } from 'react';
import CallToPrayerIcon from '@/assets/images/styles/next-call-prayer-icon.svg';
import { hexToRgba } from '@/utils/colors';
import { pxToRem } from '@/utils/viewport';
import BismillahIcon from '@/assets/images/styles/bismillah.svg';
import { he } from 'date-fns/locale';
import { positive } from 'zod';

// Skeleton component for NextPrayerTimes
function NextPrayerTimesSkeletonPreview({ colors }: { colors?: colorProps }) {
  return (
    <div className="flex flex-col items-center justify-center m-auto z-10 animate-pulse">
      {/* Top Header Skeleton */}
      <div
        className="flex items-center justify-center"
        style={{ gap: `${pxToRem(16)}` }}
      >
        {/* Icon skeleton */}
        <div
          className="bg-gray-300 rounded-full"
          style={{
            width: `${pxToRem(60)}`,
            height: `${pxToRem(60)}`,
          }}
        />
        {/* Header text skeleton */}
        <div
          className="bg-gray-300 rounded-xl"
          style={{
            width: `${pxToRem(550)}`,
            height: `${pxToRem(36)}`,
          }}
        />
      </div>

      {/* Bottom Content - Countdown Timer Skeleton */}
      <div
        className="flex items-start justify-center w-max"
        style={{ gap: `${pxToRem(27)}`, marginTop: `${pxToRem(20)}` }}
      >
        {/* Sign skeleton */}
        <div
          className="bg-gray-300 rounded-xl relative m-auto top-[-16px]"
          style={{
            width: `${pxToRem(50)}`,
            height: `${pxToRem(20)}`,
          }}
        />

        {/* Hours skeleton */}
        <div className="flex flex-col items-center">
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(180)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(80)}`,
              height: `${pxToRem(40)}`,
              marginTop: `${pxToRem(8)}`,
            }}
          />
        </div>

        {/* Colon skeleton */}
        <div
          className="bg-gray-300 rounded-xl"
          style={{
            width: `${pxToRem(20)}`,
            height: `${pxToRem(180)}`,
          }}
        />

        {/* Minutes skeleton */}
        <div className="flex flex-col items-center">
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(180)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(100)}`,
              height: `${pxToRem(40)}`,
              marginTop: `${pxToRem(8)}`,
            }}
          />
        </div>

        {/* Colon skeleton */}
        <div
          className="bg-gray-300 rounded-xl"
          style={{
            width: `${pxToRem(20)}`,
            height: `${pxToRem(180)}`,
          }}
        />

        {/* Seconds skeleton */}
        <div className="flex flex-col items-center">
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(200)}`,
              height: `${pxToRem(180)}`,
            }}
          />
          <div
            className="bg-gray-300 rounded-xl"
            style={{
              width: `${pxToRem(100)}`,
              height: `${pxToRem(40)}`,
              marginTop: `${pxToRem(8)}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface PrayerTime {
  name: string;
  scheduledTime: string;
  iqamahTime: string;
  isActive?: boolean;
}

interface colorProps {
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface NextPrayerTimesPreviewProps {
  prayerTimes: PrayerTime[];
  colors?: colorProps;
  loadingDelay?: number; // Optional delay in milliseconds for skeleton loading
}

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  isNegative: boolean;
}

export default function NextPrayerTimesPreview({
  prayerTimes,
  colors,
  loadingDelay = 500, // Default 500ms loading delay
}: NextPrayerTimesPreviewProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isNegative: false,
  });
  const [nextPrayer, setNextPrayer] = useState<PrayerTime | null>(null);
  const [currentPrayer, setCurrentPrayer] = useState<PrayerTime | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPrayerNow, setIsPrayerNow] = useState(false);

  // Function to convert time string to minutes since midnight
  const timeToMinutes = (timeStr: string): number => {
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

  // Function to find the current prayer (active prayer time)
  const findCurrentPrayer = (): PrayerTime | null => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Filter out prayers without valid times and convert to minutes
    const validPrayers = prayerTimes
      .filter(
        (prayer) => prayer.scheduledTime !== '-' && prayer.name !== 'Sunrise'
      )
      .map((prayer) => ({
        ...prayer,
        scheduledTimeInMinutes: timeToMinutes(prayer.scheduledTime),
        iqamahTimeInMinutes:
          prayer.iqamahTime !== '-'
            ? timeToMinutes(prayer.iqamahTime)
            : timeToMinutes(prayer.scheduledTime),
      }))
      .sort((a, b) => a.scheduledTimeInMinutes - b.scheduledTimeInMinutes);

    // Check if we're within any prayer time window (scheduledTime to iqamahTime + 5 minutes)
    for (const prayer of validPrayers) {
      const endTime = prayer.iqamahTimeInMinutes + 5; // Add 5 minutes after iqamah

      if (
        currentMinutes >= prayer.scheduledTimeInMinutes &&
        currentMinutes <= endTime
      ) {
        return prayer;
      }
    }

    return null;
  };

  // Function to check if it's prayer time now
  const checkIsPrayerNow = (): boolean => {
    return findCurrentPrayer() !== null;
  };

  // Function to find the next prayer
  const findNextPrayer = (): PrayerTime | null => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Filter out prayers without valid times and convert to minutes
    const validPrayers = prayerTimes
      .filter(
        (prayer) => prayer.scheduledTime !== '-' && prayer.name !== 'Sunrise'
      )
      .map((prayer) => ({
        ...prayer,
        timeInMinutes: timeToMinutes(prayer.scheduledTime),
      }))
      .sort((a, b) => a.timeInMinutes - b.timeInMinutes);

    // Find the next prayer today
    for (const prayer of validPrayers) {
      if (prayer.timeInMinutes > currentMinutes) {
        return prayer;
      }
    }

    // If no prayer found today, return the first prayer of tomorrow
    return validPrayers[0] || null;
  };

  // Function to calculate time remaining
  const calculateTimeRemaining = (): TimeRemaining => {
    if (!nextPrayer) {
      return { hours: 0, minutes: 0, seconds: 0, isNegative: false };
    }

    const now = new Date();
    const currentTotalSeconds =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const nextPrayerTotalSeconds = timeToMinutes(nextPrayer.scheduledTime) * 60;

    let diffSeconds = nextPrayerTotalSeconds - currentTotalSeconds;

    // If the prayer is tomorrow (negative difference)
    if (diffSeconds <= 0) {
      diffSeconds += 24 * 60 * 60; // Add 24 hours in seconds
    }

    const hours = Math.floor(diffSeconds / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;

    return {
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
      isNegative: false,
    };
  };

  // Loading effect with delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  useEffect(() => {
    // Set initial values
    const nextPrayerFound = findNextPrayer();
    const currentPrayerFound = findCurrentPrayer();
    const isPrayerNowValue = checkIsPrayerNow();

    setNextPrayer(nextPrayerFound);
    setCurrentPrayer(currentPrayerFound);
    setIsPrayerNow(isPrayerNowValue);

    // Update countdown every second
    const interval = setInterval(() => {
      const currentNextPrayer = findNextPrayer();
      const currentPrayerActive = findCurrentPrayer();
      const isPrayerActive = checkIsPrayerNow();

      // Update current prayer and prayer status
      setCurrentPrayer(currentPrayerActive);
      setIsPrayerNow(isPrayerActive);

      if (currentNextPrayer) {
        // Calculate time remaining for current next prayer
        const now = new Date();
        const currentTotalSeconds =
          now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const nextPrayerTotalSeconds =
          timeToMinutes(currentNextPrayer.scheduledTime) * 60;

        let diffSeconds = nextPrayerTotalSeconds - currentTotalSeconds;

        // If the prayer is tomorrow (negative difference)
        if (diffSeconds <= 0) {
          diffSeconds += 24 * 60 * 60; // Add 24 hours in seconds
        }

        const hours = Math.floor(diffSeconds / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);
        const seconds = diffSeconds % 60;

        const remaining = {
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes),
          seconds: Math.max(0, seconds),
          isNegative: false,
        };

        setTimeRemaining(remaining);
      }

      // Check if we need to update the next prayer (at midnight or when prayer time passes)
      setNextPrayer((prev) => {
        if (prev?.name !== currentNextPrayer?.name) {
          return currentNextPrayer;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerTimes]);

  // Format number to always show 2 digits
  const formatTime = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  // Show skeleton while loading
  if (isLoading) {
    return <NextPrayerTimesSkeletonPreview colors={colors} />;
  }

  if (!nextPrayer) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center m-auto z-10 transition-opacity duration-300 ease-in-out">
      {/* Top Header */}
      <div
        className="flex items-center justify-center transition-all duration-300 ease-in-out"
        style={{ gap: `${pxToRem(16)}` }}
      >
        <CallToPrayerIcon
          className={colors?.primaryColor ? '' : 'text-[#1a1a1a]'}
          style={{
            width: `${pxToRem(60)}`,
            height: `${pxToRem(60)}`,
            color: colors?.primaryColor || '#1a1a1a',
            transition: 'all 0.3s ease-in-out',
          }}
        />
        <p
          className="font-medium leading-[1.4] uppercase transition-all duration-300 ease-in-out"
          style={{
            fontSize: `${pxToRem(36)}`,
            color: colors?.primaryColor || '#1a1a1a',
            opacity: nextPrayer ? 1 : 0,
            transform: nextPrayer ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {isPrayerNow
            ? `Time for ${currentPrayer?.name} Prayer`
            : `The Call To Prayer Of ${nextPrayer?.name}`}
        </p>
      </div>

      {/* Bottom Content - Countdown Timer */}
      <div
        className="flex items-start justify-center w-max transition-all duration-300 ease-in-out"
        style={{ gap: `${pxToRem(27)}` }}
      >
        {isPrayerNow ? (
          <BismillahIcon
            style={{
              width: `${pxToRem(890)}`,
              height: 'auto',
              color: colors?.primaryColor || '#1a1a1a',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              top: pxToRem(4),
            }}
          />
        ) : (
          <>
            <p
              className="font-medium uppercase transition-all duration-300 ease-in-out"
              style={{
                fontSize: `${pxToRem(143)}`,
                letterSpacing: `${pxToRem(-2.154)}`,
                lineHeight: `${pxToRem(200)}`,
                color: colors?.primaryColor || '#1a1a1a',
                opacity: timeRemaining ? 1 : 0,
                transform: timeRemaining ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {timeRemaining.isNegative ? '+' : '-'}
            </p>

            {/* Hours */}
            <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
              <p
                className="font-krungthep transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(180)}`,
                  letterSpacing: `${pxToRem(-2.7)}`,
                  lineHeight: `${pxToRem(200)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  opacity: timeRemaining.hours !== undefined ? 1 : 0,
                  transform:
                    timeRemaining.hours !== undefined
                      ? 'translateY(0)'
                      : 'translateY(10px)',
                }}
              >
                {formatTime(timeRemaining.hours)}
              </p>
              <p
                className="font-medium leading-[1.4] uppercase transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(40)}`,
                  color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
                }}
              >
                Hours
              </p>
            </div>

            <p
              className="font-krungthep transition-all duration-300 ease-in-out"
              style={{
                fontSize: `${pxToRem(180)}`,
                letterSpacing: `${pxToRem(-2.7)}`,
                lineHeight: `${pxToRem(180)}`,
                color: colors?.primaryColor || '#1a1a1a',
              }}
            >
              :
            </p>

            {/* Minutes */}
            <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
              <p
                className="font-krungthep transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(180)}`,
                  letterSpacing: `${pxToRem(-2.7)}`,
                  lineHeight: `${pxToRem(200)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  opacity: timeRemaining.minutes !== undefined ? 1 : 0,
                  transform:
                    timeRemaining.minutes !== undefined
                      ? 'translateY(0)'
                      : 'translateY(10px)',
                }}
              >
                {formatTime(timeRemaining.minutes)}
              </p>
              <p
                className="font-medium leading-[1.4] uppercase transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(40)}`,
                  color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
                }}
              >
                Minutes
              </p>
            </div>

            <p
              className="font-krungthep transition-all duration-300 ease-in-out"
              style={{
                fontSize: `${pxToRem(180)}`,
                letterSpacing: `${pxToRem(-2.7)}`,
                lineHeight: `${pxToRem(180)}`,
                color: colors?.primaryColor || '#1a1a1a',
              }}
            >
              :
            </p>

            {/* Seconds */}
            <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
              <p
                className="font-krungthep transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(180)}`,
                  letterSpacing: `${pxToRem(-2.7)}`,
                  lineHeight: `${pxToRem(200)}`,
                  color: colors?.primaryColor || '#1a1a1a',
                  opacity: timeRemaining.seconds !== undefined ? 1 : 0,
                  transform:
                    timeRemaining.seconds !== undefined
                      ? 'translateY(0)'
                      : 'translateY(10px)',
                }}
              >
                {formatTime(timeRemaining.seconds)}
              </p>
              <p
                className="font-medium leading-[1.4] uppercase transition-all duration-300 ease-in-out"
                style={{
                  fontSize: `${pxToRem(40)}`,
                  color: hexToRgba(colors?.primaryColor || '#1a1a1a', 0.66),
                }}
              >
                Seconds
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
