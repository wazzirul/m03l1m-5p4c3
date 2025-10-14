/**
 * Converts a hex color to rgba format with specified opacity
 * @param hex - Hex color string (with or without #)
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA color string
 */
export function hexToRgba(hex: string, opacity: number): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Validate hex format
  if (!/^([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(cleanHex)) {
    throw new Error('Invalid hex color format');
  }
  
  // Validate opacity
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity must be between 0 and 1');
  }
  
  let r: number, g: number, b: number;
  
  if (cleanHex.length === 3) {
    // Handle 3-digit hex (e.g., "f0a" -> "ff00aa")
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else {
    // Handle 6-digit hex
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
