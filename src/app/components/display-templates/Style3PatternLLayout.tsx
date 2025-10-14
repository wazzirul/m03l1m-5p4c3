'use client';

import React from 'react';

interface Style3PatternLLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  themeColor?: string;
}

// Function to convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Function to convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Function to brighten a color (similar to how 0950A1 becomes 2363B3)
const brightenColor = (hex: string, factor: number = 0.5): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  // Brighten by adding to each RGB component
  const brightenedR = Math.round(rgb.r + (255 - rgb.r) * factor);
  const brightenedG = Math.round(rgb.g + (255 - rgb.g) * factor);
  const brightenedB = Math.round(rgb.b + (255 - rgb.b) * factor);

  return rgbToHex(
    Math.max(0, Math.min(255, brightenedR)),
    Math.max(0, Math.min(255, brightenedG)),
    Math.max(0, Math.min(255, brightenedB))
  );
};

// Function to create RGBA from hex with opacity
const hexToRgba = (hex: string, opacity: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(0, 0, 0, ${opacity})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

const Style3PatternLLayout: React.FC<Style3PatternLLayoutProps> = ({
  className = '',
  style = {},
  themeColor = '#0950A1',
}) => {
  const mainColor = themeColor;
  const brighterColor = brightenColor(mainColor, 0.5); // Brighten by 50%
  const shadowColor = hexToRgba(brighterColor, 0.25); // Create shadow with 25% opacity

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1248 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Filter for first path with dynamic brighter shadow color */}
        <filter
          id="filter0_df_style3_llayout_dynamic"
          x="-941.996"
          y="-206.45"
          width="2685.42"
          height="1360.07"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-20" dy="9" />
          <feGaussianBlur stdDeviation="64.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(brighterColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(brighterColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(brighterColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_style3_llayout_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_style3_llayout_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="97.5" result="effect2_foregroundBlur_style3_llayout_dynamic" />
        </filter>

        {/* Filter for second path */}
        <filter
          id="filter1_df_style3_llayout_dynamic"
          x="-1248.3"
          y="-280.161"
          width="2553.42"
          height="1228.07"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-20" dy="9" />
          <feGaussianBlur stdDeviation="64.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(brighterColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(brighterColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(brighterColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_style3_llayout_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_style3_llayout_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="22" result="effect2_foregroundBlur_style3_llayout_dynamic" />
        </filter>

        {/* Dynamic gradients using theme color */}
        <linearGradient
          id="paint0_linear_style3_llayout_dynamic"
          x1="1751.08"
          y1="670.768"
          x2="1413.9"
          y2="-695.777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_style3_llayout_dynamic"
          x1="1398.77"
          y1="522.057"
          x2="1061.6"
          y2="-844.488"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>

      {/* First path */}
      <g filter="url(#filter0_df_style3_llayout_dynamic)">
        <path
          d="M1528.65 87.0859C1202.22 152.584 161.887 230.885 496.365 464.224C867.332 723.018 -348.822 832.728 -740.439 858.332"
          stroke="url(#paint0_linear_style3_llayout_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Second path with opacity */}
      <g opacity="0.5" filter="url(#filter1_df_style3_llayout_dynamic)">
        <path
          d="M1176.34 -61.625C849.913 3.87356 -190.421 82.1741 144.057 315.513C515.023 574.307 -701.13 684.017 -1092.75 709.621"
          stroke="url(#paint1_linear_style3_llayout_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};

export default Style3PatternLLayout;
