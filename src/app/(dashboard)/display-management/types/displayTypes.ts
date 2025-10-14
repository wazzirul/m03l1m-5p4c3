import { TemplateStyleProps } from '@/app/components/display-templates/types';
import { 
  LayoutType, 
  StyleNumber, 
  LayoutDisplayName, 
  StyleDisplayName,
  ContentType,
  AnnouncementType,
  layoutToDisplay,
  displayToLayout,
  styleToDisplay,
  displayToStyle
} from '@/types/display';

export interface Display {
  id: string;
  displayName: string;
  displayCode: string;
  layout: LayoutType;
  style: StyleNumber;
  // Template content data - contains all content information
  templateContent?: TemplateStyleProps;
  // System fields
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

// Re-export global types for backward compatibility
export type {
  LayoutType,
  StyleNumber,
  LayoutDisplayName,
  StyleDisplayName,
  ContentType,
  AnnouncementType
};

// Re-export helper functions
export {
  layoutToDisplay,
  displayToLayout,
  styleToDisplay,
  displayToStyle
};
