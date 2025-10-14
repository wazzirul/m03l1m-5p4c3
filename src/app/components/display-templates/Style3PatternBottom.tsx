'use client';

import React from 'react';

interface Style3PatternBottomProps {
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

const Style3PatternBottom: React.FC<Style3PatternBottomProps> = ({
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
      viewBox="0 0 1873 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Filter for first path with dynamic brighter shadow color */}
        <filter
          id="filter0_df_style3_bottom_dynamic"
          x="735.035"
          y="-697.982"
          width="2166.65"
          height="1855.44"
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
            result="effect1_dropShadow_style3_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_style3_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="25" result="effect2_foregroundBlur_style3_bottom_dynamic" />
        </filter>

        {/* Filter for second path */}
        <filter
          id="filter1_df_style3_bottom_dynamic"
          x="-82.9648"
          y="-438.982"
          width="2298.65"
          height="1987.44"
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
            result="effect1_dropShadow_style3_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_style3_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="97.5" result="effect2_foregroundBlur_style3_bottom_dynamic" />
        </filter>

        {/* Filter for third path */}
        <filter
          id="filter2_df_style3_bottom_dynamic"
          x="-369.965"
          y="-127.982"
          width="2166.65"
          height="1855.44"
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
            result="effect1_dropShadow_style3_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_style3_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="22" result="effect2_foregroundBlur_style3_bottom_dynamic" />
        </filter>

        {/* Dynamic gradients using theme color */}
        <linearGradient
          id="paint0_linear_style3_bottom_dynamic"
          x1="2274.5"
          y1="-671"
          x2="342.5"
          y2="922.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_style3_bottom_dynamic"
          x1="1502.5"
          y1="-337"
          x2="-429.5"
          y2="1256.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint2_linear_style3_bottom_dynamic"
          x1="1169.5"
          y1="-101"
          x2="-762.5"
          y2="1492.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>

      {/* First path */}
      <g filter="url(#filter0_df_style3_bottom_dynamic)">
        <path
          d="M967.5 -522C1114.17 -303.333 1289.5 393.557 1812 169.5C2391.5 -79 2637.17 735.667 2694.5 998"
          stroke="url(#paint0_linear_style3_bottom_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Second path */}
      <g filter="url(#filter1_df_style3_bottom_dynamic)">
        <path
          d="M195.5 -188C342.167 30.6667 517.5 727.557 1040 503.5C1619.5 255 1865.17 1069.67 1922.5 1332"
          stroke="url(#paint1_linear_style3_bottom_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Third path with opacity */}
      <g opacity="0.5" filter="url(#filter2_df_style3_bottom_dynamic)">
        <path
          d="M-137.5 48C9.16667 266.667 184.5 963.557 707 739.5C1286.5 491 1532.17 1305.67 1589.5 1568"
          stroke="url(#paint2_linear_style3_bottom_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};

export default Style3PatternBottom;
