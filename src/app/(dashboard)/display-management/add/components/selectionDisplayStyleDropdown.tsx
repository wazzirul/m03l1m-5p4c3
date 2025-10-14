import Image from 'next/image';
import { LayoutType } from '@/app/(dashboard)/display-management/types/displayTypes';
import { StyleType } from '@/types/display';

interface TemplateStyle {
  name: string;
  bottomLayout: any;
  leftLayout: any;
  rightLayout: any;
  lLayout: any;
}

interface StyleDropdownProps {
  selectedStyle: StyleType;
  selectedLayout: LayoutType;
  setSelectedStyle: (style: StyleType) => void;
  setActiveDropdown: (dropdown: string | null) => void;
  templateStyles: TemplateStyle[];
}

export const StyleDropdown = ({
  selectedStyle,
  selectedLayout,
  setSelectedStyle,
  setActiveDropdown,
  templateStyles,
}: StyleDropdownProps) => {
  return (
    <div className="absolute top-full mt-4 z-10 left-0 w-full min-h-[300px] shadow-lg rounded-2xl bg-card p-6 border border-border">
      <h3 className="text-lg font-semibold mb-4">Select Style</h3>
      <div className="grid gap-4 grid-cols-3">
        {templateStyles.map((style) => {
          // For now, only show bottom layout images
          // Later you can add L layout, left layout, and right layout
          const imageToShow =
            selectedLayout === 'bottom'
              ? style.bottomLayout
              : selectedLayout === 'left'
              ? style.leftLayout
              : selectedLayout === 'right'
              ? style.rightLayout
              : selectedLayout === 'l-layout'
              ? style.lLayout
              : style.bottomLayout;

          return (
            <div
              key={style.name}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedStyle === style.name
                  ? 'border-foreground bg-muted'
                  : 'border-border'
              }`}
              onClick={() => {
                setSelectedStyle(style.name as StyleType);
                setActiveDropdown(null);
              }}
            >
              <div className="mb-3 relative">
                <div
                  className={`w-full relative z-1 h-full rounded-md overflow-hidden flex ${
                    selectedStyle === style.name ? 'bg-muted/80' : 'bg-muted'
                  }`}
                  style={{ aspectRatio: '1920 / 1080' }}
                >
                  <Image
                    src={imageToShow}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="font-medium text-sm">{style.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
