'use client';

import React from 'react';

interface Style1PatternBottomProps {
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

const Style1PatternBottom: React.FC<Style1PatternBottomProps> = ({
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
      viewBox="0 0 1872 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Filter for main path with dynamic shadow color */}
        <filter
          id="filter0_df_bottom_dynamic"
          x="-216.465"
          y="-444.982"
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
          <feOffset dy="54" />
          <feGaussianBlur stdDeviation="64.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(mainColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(mainColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(mainColor)?.b! / 255} 0 0 0 1 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="22" result="effect2_foregroundBlur_bottom_dynamic" />
        </filter>

        {/* Filter for second path */}
        <filter
          id="filter1_df_bottom_dynamic"
          x="754.535"
          y="-652.982"
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
          <feOffset dy="54" />
          <feGaussianBlur stdDeviation="64.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${hexToRgb(mainColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(mainColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(mainColor)?.b! / 255} 0 0 0 1 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="22" result="effect2_foregroundBlur_bottom_dynamic" />
        </filter>

        {/* Filter for third path with darker shadow */}
        <filter
          id="filter2_df_bottom_dynamic"
          x="-370.465"
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
            values={`0 0 0 0 ${hexToRgb(darkerColor)?.r! / 255} 0 0 0 0 ${
              hexToRgb(darkerColor)?.g! / 255
            } 0 0 0 0 ${hexToRgb(darkerColor)?.b! / 255} 0 0 0 0.25 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_bottom_dynamic"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_bottom_dynamic"
            result="shape"
          />
          <feGaussianBlur stdDeviation="22" result="effect2_foregroundBlur_bottom_dynamic" />
        </filter>

        {/* Dynamic gradients using theme color */}
        <linearGradient
          id="paint0_linear_bottom_dynamic"
          x1="859.5"
          y1="-190.5"
          x2="859.5"
          y2="1206"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_bottom_dynamic"
          x1="2274"
          y1="-671"
          x2="342"
          y2="922.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="paint2_linear_bottom_dynamic"
          x1="1169"
          y1="-101"
          x2="-763"
          y2="1492.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={mainColor} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>

      {/* Main path */}
      <g filter="url(#filter0_df_bottom_dynamic)">
        <path
          d="M-4 -314C142.667 -95.3333 318 601.557 840.5 377.5C1420 129 1665.67 943.667 1723 1206"
          stroke="url(#paint0_linear_bottom_dynamic)"
          strokeOpacity="0.5"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Second path */}
      <g filter="url(#filter1_df_bottom_dynamic)">
        <path
          d="M967 -522C1113.67 -303.333 1289 393.557 1811.5 169.5C2391 -79 2636.67 735.667 2694 998"
          stroke="url(#paint1_linear_bottom_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>

      {/* Third path */}
      <g filter="url(#filter2_df_bottom_dynamic)">
        <path
          d="M-138 48C8.66667 266.667 184 963.557 706.5 739.5C1286 491 1531.67 1305.67 1589 1568"
          stroke="url(#paint2_linear_bottom_dynamic)"
          strokeOpacity="0.1"
          strokeWidth="201"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};

export default Style1PatternBottom;
