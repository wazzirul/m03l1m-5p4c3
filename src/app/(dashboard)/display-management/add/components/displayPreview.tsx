'use client';

import { useState, useEffect, useRef } from 'react';
import { TemplateStyleProps, MainContentData } from '@/app/components/display-templates/types';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';
import {
  LayoutType,
  ContentType,
  AnnouncementType,
} from '@/app/(dashboard)/display-management/types/displayTypes';
import { StyleType } from '@/types/display';

// Bottom Layout
import Style1BottomLayoutPreview from '@/app/components/display-templates/style1/bottomLayoutPreview';
import Style2BottomLayoutPreview from '@/app/components/display-templates/style2/bottomLayoutPreview';
import Style3BottomLayoutPreview from '@/app/components/display-templates/style3/bottomLayoutPreview';
import Style4BottomLayoutPreview from '@/app/components/display-templates/style4/bottomLayoutPreview';
import Style5BottomLayoutPreview from '@/app/components/display-templates/style5/bottomLayoutPreview';
import Style6BottomLayoutPreview from '@/app/components/display-templates/style6/bottomLayoutPreview';

// Left Layout
import Style1LeftLayoutPreview from '@/app/components/display-templates/style1/leftLayoutPreview';
import Style2LeftLayoutPreview from '@/app/components/display-templates/style2/leftLayoutPreview';
import Style3LeftLayoutPreview from '@/app/components/display-templates/style3/leftLayoutPreview';
import Style4LeftLayoutPreview from '@/app/components/display-templates/style4/leftLayoutPreview';
import Style5LeftLayoutPreview from '@/app/components/display-templates/style5/leftLayoutPreview';
import Style6LeftLayoutPreview from '@/app/components/display-templates/style6/leftLayoutPreview';

// Right Layout
import Style1RightLayoutPreview from '@/app/components/display-templates/style1/rightLayoutPreview';
import Style2RightLayoutPreview from '@/app/components/display-templates/style2/rightLayoutPreview';
import Style3RightLayoutPreview from '@/app/components/display-templates/style3/rightLayoutPreview';
import Style4RightLayoutPreview from '@/app/components/display-templates/style4/rightLayoutPreview';
import Style5RightLayoutPreview from '@/app/components/display-templates/style5/rightLayoutPreview';
import Style6RightLayoutPreview from '@/app/components/display-templates/style6/rightLayoutPreview';
// L-Layout
import Style1LLayoutPreview from '@/app/components/display-templates/style1/L-LayoutPreview';
import Style2LLayoutPreview from '@/app/components/display-templates/style2/L-LayoutPreview';
import Style3LLayoutPreview from '@/app/components/display-templates/style3/L-LayoutPreview';
import Style4LLayoutPreview from '@/app/components/display-templates/style4/L-LayoutPreview';
import Style5LLayoutPreview from '@/app/components/display-templates/style5/L-LayoutPreview';
import Style6LLayoutPreview from '@/app/components/display-templates/style6/L-LayoutPreview';

interface DisplayPreviewProps {
  selectedLayout: LayoutType;
  selectedStyle?: StyleType;
  selectedColor?: string;
  selectedContent?: ContentType;
  selectedAnnouncementType?: AnnouncementType;
  mainContent?: React.ReactNode;
  mainContentData?: MainContentData | null;
  subContentData?: Announcement[] | null;
  fit?: 'cover' | 'contain';
  templateStyles?: Array<{
    name: string;
    bottomLayout: any;
    styleId: string;
    defaultColors: {
      themeColor?: string;
      primaryColor: string;
      secondaryColor: string;
    };
  }>;
}

export const DisplayPreview = ({
  selectedLayout,
  selectedStyle,
  selectedColor,
  selectedContent,
  selectedAnnouncementType,
  mainContent,
  mainContentData,
  subContentData,
  fit = 'cover',
  templateStyles = [],
}: DisplayPreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScaled, setIsScaled] = useState(false);
  const [scale, setScale] = useState(1);

  const parseColors = (colorString?: string) => {
    // If custom colors are provided, use them
    if (colorString) {
      try {
        return JSON.parse(colorString);
      } catch {
        // Fall through to default colors based on style
      }
    }

    // Find the template style that matches the selected style name
    const matchedStyle = templateStyles.find(
      (style) => style.name === selectedStyle
    );

    if (matchedStyle) {
      return matchedStyle.defaultColors;
    }

    // Fallback to style1 colors if no match found
    return {
      themeColor: '#FCD29A',
      primaryColor: '#1a1a1a',
      secondaryColor: '#ffffff',
    };
  };
  const colors = parseColors(selectedColor);

  const renderStyleComponent = () => {
    const commonProps: TemplateStyleProps = {
      orgName: 'MCC San Diego',
      mosqueName: 'San Diego Mosque',
      colors: colors,
      selectedContent: selectedContent,
      mainContent: mainContent || null,
      mainContentData: mainContentData,
      subContentData: subContentData,
    };

    switch (selectedStyle) {
      case 'Light Gradient Overlay':
        switch (selectedLayout) {
          case 'bottom':
            return <Style1BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style1LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style1RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style1LLayoutPreview {...commonProps} />;
        }
      case 'Light Image Overlay':
        switch (selectedLayout) {
          case 'bottom':
            return <Style2BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style2LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style2RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style2LLayoutPreview {...commonProps} />;
        }
      case 'Dark Gradient Overlay':
        switch (selectedLayout) {
          case 'bottom':
            return <Style3BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style3LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style3RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style3LLayoutPreview {...commonProps} />;
        }
      case 'Dark Image Overlay':
        switch (selectedLayout) {
          case 'bottom':
            return <Style4BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style4LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style4RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style4LLayoutPreview {...commonProps} />;
        }
      case 'Light Imagery':
        switch (selectedLayout) {
          case 'bottom':
            return <Style5BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style5LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style5RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style5LLayoutPreview {...commonProps} />;
        }
      case 'Dark Imagery':
        switch (selectedLayout) {
          case 'bottom':
            return <Style6BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style6LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style6RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style6LLayoutPreview {...commonProps} />;
        }
      default:
        switch (selectedLayout) {
          case 'bottom':
            return <Style1BottomLayoutPreview {...commonProps} />;
          case 'left':
            return <Style1LeftLayoutPreview {...commonProps} />;
          case 'right':
            return <Style1RightLayoutPreview {...commonProps} />;
          case 'l-layout':
            return <Style1LLayoutPreview {...commonProps} />;
        }
    }
  };

  useEffect(() => {
    setIsScaled(false);
    let retryCount = 0;
    const maxRetries = 10;
    let timeoutId: NodeJS.Timeout;

    const updateScale = () => {
      if (!containerRef.current) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(updateScale, 100);
        }
        return;
      }

      const { width, height } = containerRef.current.getBoundingClientRect();

      // If dimensions are still 0, retry
      if ((width === 0 || height === 0) && retryCount < maxRetries) {
        retryCount++;
        timeoutId = setTimeout(updateScale, 100);
        return;
      }

      const scaleX = width / 1920;
      const scaleY = height / 1080;
      // cover = fill (may crop), contain = letterbox
      const newScale =
        fit === 'cover' ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);

      setScale(newScale);

      // Set scaled to true after a short delay to ensure smooth transition
      timeoutId = setTimeout(() => {
        setIsScaled(true);
      }, 100);
    };

    // Initial call with a small delay to ensure DOM is ready
    timeoutId = setTimeout(updateScale, 50);

    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fit, selectedLayout, selectedStyle]);

  return (
    <div className="mt-8">
      <div className="p-4 w-full">
        <h3 className="text-lg font-semibold mb-4">Display Preview</h3>

        <div
          ref={containerRef}
          className="w-full rounded-lg overflow-hidden relative border shadow-xl"
          style={{ aspectRatio: '1920 / 1080', background: 'transparent' }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: colors?.secondaryColor || '#fff' }}
          >
            <div
              className="origin-center"
              style={{
                width: '1920px',
                height: '1080px',
                minWidth: '1920px',
                minHeight: '1080px',
                maxWidth: '1920px',
                maxHeight: '1080px',
                aspectRatio: '1920 / 1080',
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                zIndex: 1,
                opacity: isScaled ? 1 : 0,
                flexShrink: 0,
              }}
            >
              {renderStyleComponent()}
            </div>
            {!isScaled && (
              <div className="w-full h-full absolute inset-0 z-10 animate-pulse bg-neutral-300" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
