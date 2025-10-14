/**
 * Viewport utility functions for converting pixels to viewport units
 */

/**
 * Convert pixels to viewport width (vw) units
 * @param px - Pixel value to convert
 * @param baseWidth - Base width in pixels (default: 1920)
 * @returns String with vw unit
 */
export const pxtoVw = (px: number, baseWidth: number = 1920): string => {
  return `${(px / baseWidth) * 100}vw`;
};

/**
 * Convert pixels to viewport height (vh) units
 * @param px - Pixel value to convert
 * @param baseHeight - Base height in pixels (default: 1080)
 * @returns String with vh unit
 */
export const heightToVh = (px: number, baseHeight: number = 1080): string => {
  return `${(px / baseHeight) * 100}vh`;
};

export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};
