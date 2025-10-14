// Global display types - Single source of truth for layout and style definitions

// Layout types matching the template structure
export type LayoutType = 
  | 'bottom'
  | 'left' 
  | 'right' 
  | 'l-layout';

// Style numbers matching the template structure
export type StyleNumber = 1 | 2 | 3 | 4 | 5 | 6;

// Display-friendly layout names for UI
export type LayoutDisplayName = 
  | 'Bottom Layout' 
  | 'Left Layout' 
  | 'Right Layout' 
  | 'L-Layout';

// Display-friendly style names for UI
export type StyleDisplayName =
  | 'Light Gradient Overlay'
  | 'Light Image Overlay'
  | 'Dark Gradient Overlay'
  | 'Dark Image Overlay'
  | 'Light Imagery'
  | 'Dark Imagery';

// Content types used across the application
export type ContentType =
  | 'Images'
  | 'Videos'
  | 'Announcements'
  | 'Quran Verse'
  | 'Next Prayer Times';

// Announcement types
export type AnnouncementType = 'text' | 'image' | 'video' | null;

// Helper functions to convert between internal and display formats
export const layoutToDisplay = (layout: LayoutType): LayoutDisplayName => {
  switch (layout) {
    case 'bottom': return 'Bottom Layout';
    case 'left': return 'Left Layout';
    case 'right': return 'Right Layout';
    case 'l-layout': return 'L-Layout';
    default: return 'Bottom Layout';
  }
};

export const displayToLayout = (display: LayoutDisplayName): LayoutType => {
  switch (display) {
    case 'Bottom Layout': return 'bottom';
    case 'Left Layout': return 'left';
    case 'Right Layout': return 'right';
    case 'L-Layout': return 'l-layout';
    default: return 'bottom';
  }
};

export const styleToDisplay = (style: StyleNumber): StyleDisplayName => {
  switch (style) {
    case 1: return 'Light Gradient Overlay';
    case 2: return 'Light Image Overlay';
    case 3: return 'Dark Gradient Overlay';
    case 4: return 'Dark Image Overlay';
    case 5: return 'Light Imagery';
    case 6: return 'Dark Imagery';
    default: return 'Light Gradient Overlay';
  }
};

export const displayToStyle = (display: StyleDisplayName): StyleNumber => {
  switch (display) {
    case 'Light Gradient Overlay': return 1;
    case 'Light Image Overlay': return 2;
    case 'Dark Gradient Overlay': return 3;
    case 'Dark Image Overlay': return 4;
    case 'Light Imagery': return 5;
    case 'Dark Imagery': return 6;
    default: return 1;
  }
};

// Style type alias for backward compatibility
export type StyleType = StyleDisplayName;
