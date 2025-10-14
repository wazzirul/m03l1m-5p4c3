'use client';

import React from 'react';

interface Style1PatternLLayoutProps {
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

// Function to darken a color (similar to how FCD29A becomes B37523)
const darkenColor = (hex: string, factor: number = 0.3): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  // Darken by reducing each RGB component
  const darkenedR = Math.round(rgb.r * (1 - factor));
  const darkenedG = Math.round(rgb.g * (1 - factor));
  const darkenedB = Math.round(rgb.b * (1 - factor));

  return rgbToHex(
    Math.max(0, Math.min(255, darkenedR)),
    Math.max(0, Math.min(255, darkenedG)),
    Math.max(0, Math.min(255, darkenedB))
  );
};

// Function to create RGBA from hex with opacity
const hexToRgba = (hex: string, opacity: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(0, 0, 0, ${opacity})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

const Style1PatternLLayout: React.FC<Style1PatternLLayoutProps> = ({
  className = '',
  style = {},
  themeColor = '#FCD29A',
}) => {
  const mainColor = themeColor;
  const darkerColor = darkenColor(mainColor, 0.3); // Darken by 30%
  const shadowColor = hexToRgba(darkerColor, 0.25); // Create shadow with 25% opacity

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1248 828"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Filter for main path with dynamic shadow color */}
        <filter
          id="filter0_df_llayout_dynamic"
          x="-960.917"
          y="-629.631"
          width="2861.22"
          height="2450.25"
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
          <feOffset dy="71.311" />
          <feGaussianBlur stdDeviation="85.177" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(darkerColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(darkerColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(darkerColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_llayout_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_llayout_dynamic"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="29.0526"
            result="effect2_foregroundBlur_llayout_dynamic"
          />
        </filter>

        {/* Filter for second path */}
        <filter
          id="filter1_df_llayout_dynamic"
          x="321.361"
          y="-904.312"
          width="2861.22"
          height="2450.25"
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
          <feOffset dy="71.311" />
          <feGaussianBlur stdDeviation="85.177" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(darkerColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(darkerColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(darkerColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_llayout_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_llayout_dynamic"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="29.0526"
            result="effect2_foregroundBlur_llayout_dynamic"
          />
        </filter>

        {/* Filter for third path */}
        <filter
          id="filter2_df_llayout_dynamic"
          x="-1164.29"
          y="-211.01"
          width="2861.22"
          height="2450.25"
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
          <feOffset dx="-26.4115" dy="11.8852" />
          <feGaussianBlur stdDeviation="85.177" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(darkerColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(darkerColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(darkerColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_llayout_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_llayout_dynamic"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="29.0526"
            result="effect2_foregroundBlur_llayout_dynamic"
          />
        </filter>

        {/* Dynamic gradients using theme color */}
        <linearGradient
          id="paint0_linear_llayout_dynamic"
          x1="459.972"
          y1="-293.569"
          x2="459.972"
          y2="1550.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_llayout_dynamic"
          x1="2327.92"
          y1="-928.106"
          x2="-223.426"
          y2="1176.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint2_linear_llayout_dynamic"
          x1="868.69"
          y1="-175.378"
          x2="-1682.66"
          y2="1928.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>

      {/* Main path */}
      <g filter="url(#filter0_df_llayout_dynamic)">
        <path
          d="M-680.344 -456.66C-486.66 -167.894 -255.119 752.402 434.881 456.517C1200.15 128.354 1524.57 1204.18 1600.29 1550.61"
          stroke="url(#paint0_linear_llayout_dynamic)"
          strokeOpacity="0.5"
          strokeWidth="265.435"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Second path */}
      <g filter="url(#filter1_df_llayout_dynamic)">
        <path
          d="M601.934 -731.34C795.618 -442.575 1027.16 477.721 1717.16 181.837C2482.43 -146.326 2806.85 929.502 2882.57 1275.93"
          stroke="url(#paint1_linear_llayout_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="265.435"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Third path */}
      <g filter="url(#filter2_df_llayout_dynamic)">
        <path
          d="M-857.301 21.3872C-663.617 310.153 -432.076 1230.45 257.924 934.564C1023.2 606.402 1347.62 1682.23 1423.33 2028.66"
          stroke="url(#paint2_linear_llayout_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="265.435"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};

export default Style1PatternLLayout;
