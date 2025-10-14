'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import SmallMosqueIcon from '@/assets/images/styles/mosque-icon.png';
import { pxtoVw } from '@/utils/viewport';
import { hexToRgba } from '@/utils/colors';

// Skeleton component
function OrganizationNameSkeleton({
  colors,
  top,
  positionXValue = 0,
  typeLayout = 'default',
}: {
  colors?: colorProps;
  top?: string;
  positionXValue?: number;
  typeLayout?: 'default' | 'right';
}) {
  return (
    <div
      className={`flex items-center absolute z-10 animate-pulse ${
        typeLayout === 'right' ? 'flex-row-reverse' : ''
      }`}
      style={{
        top: `${isNaN(Number(top)) ? top : pxtoVw(Number(top || '16'))}`,
        left: `${typeLayout === 'right' ? 'unset' : pxtoVw(positionXValue)}`,
        right: `${typeLayout === 'right' ? pxtoVw(positionXValue) : 'unset'}`,
        backgroundColor: colors?.secondaryColor || '#fff',
        borderRadius: `${pxtoVw(100)}`,
        padding: `${pxtoVw(4)}`,
        paddingLeft: typeLayout === 'right' ? `${pxtoVw(24)}` : `${pxtoVw(4)}`,
        paddingRight: typeLayout === 'right' ? `${pxtoVw(4)}` : `${pxtoVw(24)}`,
        gap: `${pxtoVw(24)}`,
      }}
    >
      {/* Skeleton icon */}
      <div
        className="flex items-center justify-center border border-[#E7E8EB]"
        style={{
          borderRadius: `100%`,
          overflow: `hidden`,
          backgroundColor: '#FFFFFF', // Always white background for icon
          padding: `${pxtoVw(8)}`,
          boxShadow: `0 ${pxtoVw(2)} ${pxtoVw(12)} 0 ${hexToRgba(
            colors?.primaryColor || '#1a1a1a',
            0.15
          )}`,
        }}
      >
        <div
          className="bg-gray-300 rounded-full m-auto"
          style={{
            width: `${pxtoVw(47)}`,
            height: `${pxtoVw(47)}`,
          }}
        />
      </div>
      {/* Skeleton text */}
      <div
        className="bg-gray-300 rounded-xl relative"
        style={{
          width: `${pxtoVw(200)}`,
          height: `${pxtoVw(32)}`,
          marginLeft: typeLayout === 'right' ? `${pxtoVw(4)}` : `${pxtoVw(-4)}`,
          marginRight:
            typeLayout === 'right' ? `${pxtoVw(-4)}` : `${pxtoVw(4)}`,
        }}
      />
    </div>
  );
}

interface colorProps {
  themeColor?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

interface OrganizationNameProps {
  organizationImage?: string | StaticImageData;
  organizationName?: string;
  top?: string;
  positionXValue?: number;
  colors?: colorProps;
  loadingDelay?: number;
  typeLayout?: 'default' | 'right';
  style?: React.CSSProperties;
}

export default function OrganizationName({
  organizationImage,
  organizationName = 'Organization Name',
  top = '16',
  positionXValue = 0,
  colors,
  loadingDelay = 500,
  typeLayout = 'default',
  style,
}: OrganizationNameProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Loading effect with delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(loadingTimer);
  }, [loadingDelay]);

  // Image loading handler
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Show skeleton while loading
  if (isLoading) {
    return (
      <OrganizationNameSkeleton
        colors={colors}
        top={top}
        positionXValue={positionXValue}
        typeLayout={typeLayout}
      />
    );
  }

  return (
    <div
      className={`flex items-center absolute z-10 transition-opacity duration-300 ease-in-out ${
        typeLayout === 'right' ? 'flex-row-reverse' : ''
      }`}
      style={{
        top: `${isNaN(Number(top)) ? top : pxtoVw(Number(top))}`,
        left: `${typeLayout === 'right' ? 'unset' : pxtoVw(positionXValue)}`,
        right: `${typeLayout === 'right' ? pxtoVw(positionXValue) : 'unset'}`,
        backgroundColor: colors?.secondaryColor || '#fff',
        borderRadius: `${pxtoVw(100)}`,
        padding: `${pxtoVw(4)}`,
        paddingLeft: typeLayout === 'right' ? `${pxtoVw(24)}` : `${pxtoVw(4)}`,
        paddingRight: typeLayout === 'right' ? `${pxtoVw(4)}` : `${pxtoVw(24)}`,
        gap: `${pxtoVw(24)}`,
        opacity: imageLoaded || !organizationImage ? 1 : 0.7,
        ...style,
      }}
    >
      <div
        className="flex items-center justify-center border border-[#E7E8EB]"
        style={{
          borderRadius: `100%`,
          overflow: `hidden`,
          backgroundColor: '#FFFFFF', // Always white background for icon
          padding: organizationImage
            ? `${pxtoVw(8)} ${pxtoVw(6)}`
            : `${pxtoVw(8)} ${pxtoVw(8)} ${pxtoVw(14)}`,
          boxShadow: `0 ${pxtoVw(2)} ${pxtoVw(12)} 0 ${hexToRgba(
            colors?.primaryColor || '#1a1a1a',
            0.15
          )}`,
        }}
      >
        {organizationImage ? (
          <div className="relative">
            {!imageLoaded && (
              <div
                className="absolute inset-0 bg-gray-300 rounded animate-pulse"
                style={{
                  width: `${pxtoVw(47)}`,
                  height: `${pxtoVw(47)}`,
                }}
              />
            )}
            <Image
              alt="organization logo"
              src={organizationImage}
              width={100}
              height={100}
              className={`object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxWidth: `${pxtoVw(47)}`, maxHeight: `${pxtoVw(47)}` }}
              onLoad={handleImageLoad}
              loading="lazy"
              priority={false}
            />
          </div>
        ) : (
          <Image
            alt="mosque icon"
            src={SmallMosqueIcon}
            className="m-auto"
            width={95}
            height={84}
            style={{ width: `${pxtoVw(47)}`, height: `${pxtoVw(42)}` }}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        )}
      </div>
      <p
        className="font-semibold leading-[1.25] transition-opacity duration-300"
        style={{
          fontSize: `${pxtoVw(32)}`,
          color: colors?.primaryColor || '#1a1a1a',
        }}
      >
        {organizationName}
      </p>
    </div>
  );
}
