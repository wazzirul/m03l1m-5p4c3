import { StaticImageData } from 'next/image';

/**
 * Image utility functions
 */

/**
 * Get the correct image URL from either a string URL or StaticImageData object
 * @param image - Image source (string URL or StaticImageData object)
 * @returns String URL or null if no image provided
 */
export const getImageUrl = (
  image: string | StaticImageData | null | undefined
): string | null => {
  if (!image) return null;
  if (typeof image === 'string') return image;
  return image.src; // StaticImageData has a .src property
};
