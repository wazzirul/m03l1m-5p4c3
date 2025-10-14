'use client';

import React, { useState, useEffect } from 'react';
import IconFajr from '@/assets/icons/icon-fajr.svg';
import IconSunrise from '@/assets/icons/icon-sunrise.svg';
import IconZuhr from '@/assets/icons/icon-zuhr.svg';
import IconMaghrib from '@/assets/icons/icon-maghrib.svg';
import IconIsya from '@/assets/icons/icon-isya.svg';
import { pxtoVw } from '@/utils/viewport';

// Predefined skeleton widths to avoid hydration mismatch
const SKELETON_WIDTHS = [80, 95, 110, 75, 100, 85, 120];

// Skeleton component for PrayerTimesTable
function PrayerTimesTableSkeleton({
  colors,
  className = '',
}: {
  colors?: colorProps;
  className?: string;
}) {
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${className}`}
      style={{
        backgroundColor: colors?.secondaryColor || '#ffffff',
        opacity: 0.8,
      }}
    >
      <div
        className="flex flex-col items-stretch w-full"
        style={{ gap: `${pxtoVw(16)}` }}
      >
        {/* Header skeleton */}
        <div className="grid grid-cols-3">
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Time
          </div>
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Adhan
          </div>
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Iqamah
          </div>
        </div>

        {/* Prayer rows skeleton */}
        <div
          className="flex flex-col items-stretch w-full"
          style={{ gap: `${pxtoVw(8)}` }}
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-3 hover:bg-transparent transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: 'transparent',
                padding: `${pxtoVw(14)} ${pxtoVw(14)}`,
                borderRadius: '0',
                borderBottom: '0',
              }}
            >
              {/* Prayer name with icon skeleton */}
              <div
                style={{
                  fontSize: `${pxtoVw(32)}`,
                }}
              >
                <div
                  className="flex items-center w-max animate-pulse"
                  style={{ gap: `${pxtoVw(8)}` }}
                >
                  {/* Icon skeleton */}
                  <div
                    className="bg-gray-300 rounded"
                    style={{
                      width: `${pxtoVw(40)}`,
                      height: `${pxtoVw(40)}`,
                      flexShrink: 0,
                    }}
                  />
                  {/* Prayer name skeleton using predefined widths */}
                  <div
                    className="bg-gray-300 rounded"
                    style={{
                      width: `${pxtoVw(SKELETON_WIDTHS[index] || 80)}`,
                      height: `${pxtoVw(32)}`,
                    }}
                  />
                </div>
              </div>

              {/* Adhan time skeleton */}
              <div
                className="font-semibold text-center leading-[1.25]"
                style={{
                  fontSize: `${pxtoVw(32)}`,
                  letterSpacing: `${pxtoVw(-0.32)}`,
                }}
              >
                <div
                  className="bg-gray-300 rounded mx-auto animate-pulse"
                  style={{
                    width: `${pxtoVw(70)}`,
                    height: `${pxtoVw(32)}`,
                  }}
                />
              </div>

              {/* Iqamah time skeleton */}
              <div
                className="font-semibold text-center leading-[1.25]"
                style={{
                  fontSize: `${pxtoVw(32)}`,
                  letterSpacing: `${pxtoVw(-0.32)}`,
                }}
              >
                <div
                  className="bg-gray-300 rounded mx-auto animate-pulse"
                  style={{
                    width: `${pxtoVw(70)}`,
                    height: `${pxtoVw(32)}`,
                  }}
                />
              </div>
            </div>
          ))}
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
  isJumuah?: boolean;
}

interface colorProps {
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface PrayerTimesTableProps {
  prayerTimes: PrayerTime[];
  className?: string;
  colors?: colorProps;
  loadingDelay?: number;
}

const PrayerTimesTable: React.FC<PrayerTimesTableProps> = ({
  prayerTimes,
  className = '',
  colors,
  loadingDelay = 500,
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
    const isFriday = now.getDay() === 5;

    const allPrayers = prayerTimes
      .filter((prayer) => prayer.scheduledTime !== '-')
      .map((prayer) => ({
        ...prayer,
        timeInMinutes: timeToMinutes(prayer.scheduledTime),
      }))
      .sort((a, b) => a.timeInMinutes - b.timeInMinutes);

    let activePrayer = null;

    for (let i = 0; i < allPrayers.length; i++) {
      const currentPrayer = allPrayers[i];
      const nextPrayer = allPrayers[i + 1];

      if (currentMinutes >= currentPrayer.timeInMinutes) {
        if (!nextPrayer || currentMinutes < nextPrayer.timeInMinutes) {
          activePrayer = currentPrayer.name;

          if (activePrayer === 'Jumuah 1' && !isFriday) {
            const zuhrPrayer = allPrayers.find((p) => p.name === 'Zuhr');
            if (zuhrPrayer && currentMinutes >= zuhrPrayer.timeInMinutes) {
              activePrayer = 'Zuhr';
            }
          } else if (activePrayer === 'Zuhr' && isFriday) {
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

    if (!activePrayer && allPrayers.length > 0) {
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
      const isFriday = now.getDay() === 5;
      const activePrayerName = findActivePrayer();

      const updatedPrayerTimes = prayerTimes.map((prayer) => {
        let isActive = prayer.name === activePrayerName;

        if (isActive) {
          if (isFriday && prayer.name === 'Zuhr') {
            isActive = false;
          } else if (
            !isFriday &&
            prayer.name.toLowerCase().includes('jumuah')
          ) {
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

    updateActivePrayer();
    const interval = setInterval(updateActivePrayer, 60000);
    return () => clearInterval(interval);
  }, [prayerTimes]);

  const getIcon = (prayerName: string) => {
    const iconProps = {
      style: {
        width: `${pxtoVw(20)}`,
        height: `${pxtoVw(20)}`,
        color: colors?.primaryColor || '#1a1a1a',
      },
    };

    switch (prayerName.toLowerCase()) {
      case 'fajr':
        return <IconFajr {...iconProps} />;
      case 'sunrise':
        return <IconSunrise {...iconProps} />;
      case 'zuhr':
      case 'jumuah 1':
        return <IconZuhr {...iconProps} />;
      case 'ashr':
        return (
          <IconFajr
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      case 'maghrib':
        return (
          <IconMaghrib
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      case "isya'":
        return (
          <IconIsya
            style={{
              ...iconProps.style,
              transform: 'scaleX(-1)',
            }}
          />
        );
      default:
        return <IconFajr {...iconProps} />;
    }
  };

  // Show skeleton while loading
  if (isLoading) {
    return <PrayerTimesTableSkeleton colors={colors} className={className} />;
  }

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${className}`}
      style={{
        backgroundColor: colors?.secondaryColor || '#ffffff',
        opacity: activePrayerTimes.length > 0 ? 1 : 0.8,
      }}
    >
      <div
        className="flex flex-col items-stretch w-full"
        style={{ gap: `${pxtoVw(16)}` }}
      >
        <div className="grid grid-cols-3">
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Time
          </div>
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Adhan
          </div>
          <div
            className="font-bold text-center leading-[1.25]"
            style={{
              fontSize: `${pxtoVw(32)}`,
              color: colors?.primaryColor || '#1a1a1a',
              padding: `${pxtoVw(8)} ${pxtoVw(12)}`,
            }}
          >
            Iqamah
          </div>
        </div>

        <div
          className="flex flex-col items-stretch w-full"
          style={{ gap: `${pxtoVw(8)}` }}
        >
          {activePrayerTimes.map((prayer, index) => {
            const isActive = prayer.isActive;
            const textColor = isActive
              ? colors?.secondaryColor || '#ffffff'
              : colors?.primaryColor || '#1a1a1a';

            return (
              <div
                key={index}
                className="grid grid-cols-3 hover:bg-transparent transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: isActive
                    ? colors?.primaryColor || '#1a1a1a'
                    : 'transparent',
                  padding: `${pxtoVw(14)} ${pxtoVw(14)}`,
                  borderRadius: isActive ? `${pxtoVw(12)}` : '0',
                  borderBottom: '0',
                }}
              >
                <div
                  style={{
                    fontSize: `${pxtoVw(32)}`,
                    color: textColor,
                    borderRadius: isActive
                      ? `${pxtoVw(12)} 0 0 ${pxtoVw(12)}`
                      : '0',
                  }}
                >
                  <div
                    className="flex items-center w-max"
                    style={{ gap: `${pxtoVw(8)}` }}
                  >
                    {React.cloneElement(getIcon(prayer.name), {
                      style: {
                        width: `${pxtoVw(40)}`,
                        height: `${pxtoVw(40)}`,
                        color: textColor,
                      },
                    })}
                    <span
                      style={{
                        fontSize: `${pxtoVw(32)}`,
                        lineHeight: `normal`,
                        letterSpacing: `${pxtoVw(-0.32)}`,
                      }}
                      className="font-medium w-max"
                    >
                      {prayer.name}
                    </span>
                  </div>
                </div>
                <div
                  className="font-semibold text-center leading-[1.25]"
                  style={{
                    fontSize: `${pxtoVw(32)}`,
                    color: textColor,
                    letterSpacing: `${pxtoVw(-0.32)}`,
                  }}
                >
                  {prayer.scheduledTime}
                </div>
                <div
                  className="font-semibold text-center leading-[1.25]"
                  style={{
                    fontSize: `${pxtoVw(32)}`,
                    color: textColor,
                    letterSpacing: `${pxtoVw(-0.32)}`,
                    borderRadius: isActive
                      ? `0 ${pxtoVw(12)} ${pxtoVw(12)} 0`
                      : '0',
                  }}
                >
                  {prayer.iqamahTime}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrayerTimesTable;
