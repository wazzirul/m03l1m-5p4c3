import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ColorPopupProps {
  selectedColor: string;
  selectedStyle: string;
  setSelectedColor: (color: string) => void;
  colorType: string;
  currentColor: string;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}

interface ColorPickerProps {
  isOpen: boolean;
  onClose: () => void;
  currentColor: string;
  onColorChange: (color: string) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  colorType: string;
  style?: React.CSSProperties;
}

export function ColorPicker({
  isOpen,
  onClose,
  currentColor,
  onColorChange,
  triggerRef,
  colorType,
  style,
}: ColorPickerProps) {
  const [hexValue, setHexValue] = useState(currentColor);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHexValue(currentColor);
  }, [currentColor]);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const newHex = `#${value}`;
    setHexValue(newHex);
    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      onColorChange(newHex);
    }
  };

  const handleColorPickerChange = (color: string) => {
    setHexValue(color);
    onColorChange(color);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className="absolute bg-card rounded-lg shadow-xl border border-border p-4 z-50 w-[280px]"
      style={{
        top: `100%`,
        right: `0`,
        marginTop: '8px',
        ...style,
      }}
    >
      <div className="space-y-3">
        <h4 className="font-medium text-sm capitalize">{colorType} Color</h4>

        {/* Color Picker */}
        <div className="flex justify-center">
          <div className="w-full aspect-square max-h-44">
            <HexColorPicker
              color={currentColor}
              onChange={handleColorPickerChange}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Current Color Preview and Hex Input */}
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded border border-border flex-shrink-0"
            style={{ backgroundColor: currentColor }}
          />
          <div className="flex-1 min-w-0">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-muted-foreground text-sm">
                #
              </span>
              <Input
                value={hexValue.slice(1)}
                onChange={handleHexChange}
                placeholder="000000"
                className="pl-5 text-sm h-9"
                maxLength={6}
                pattern="[0-9A-Fa-f]{6}"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="outline"
          onClick={onClose}
          size="sm"
          className="text-xs px-2 h-7 cursor-pointer"
        >
          Cancel
        </Button>
        <Button
          onClick={onClose}
          size="sm"
          className="text-xs px-2 h-7 cursor-pointer"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

export const ColorPopup = ({
  selectedColor,
  selectedStyle,
  setSelectedColor,
  colorType,
  currentColor,
  onClose,
  triggerRef,
  style,
}: ColorPopupProps) => {
  const defaultRef = useRef<HTMLDivElement>(null);

  // Parse current color configuration
  const parseColors = (colorString: string) => {
    try {
      return JSON.parse(colorString);
    } catch {
      // Default colors based on style
      const hasThemeColor =
        selectedStyle === 'Light Gradient Overlay' ||
        selectedStyle === 'Dark Gradient Overlay';
      if (hasThemeColor) {
        return {
          themeColor: '#FCD29A',
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        };
      } else {
        return {
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        };
      }
    }
  };

  const colors = parseColors(selectedColor);

  const handleColorChange = (newColor: string) => {
    const updatedColors = { ...colors, [`${colorType}Color`]: newColor };
    setSelectedColor(JSON.stringify(updatedColors));
  };

  return (
    <ColorPicker
      isOpen={true}
      onClose={onClose}
      currentColor={currentColor}
      onColorChange={handleColorChange}
      triggerRef={triggerRef || defaultRef}
      colorType={colorType}
      style={style}
    />
  );
};
