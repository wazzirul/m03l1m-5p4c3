'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import {
  SunIcon,
  MoonIcon,
  SidebarIcon,
  LayoutIcon,
  PaletteIcon,
} from '@phosphor-icons/react';
import { HexColorPicker } from 'react-colorful';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { useRouter } from 'next/navigation';
import type { NavigationLayout } from '@/hooks/useNavigation';

const DEFAULT_BRAND_COLOR = '#0a0a0a';

interface ColorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  currentColor: string;
  onColorChange: (color: string) => void;
  triggerRef: React.RefObject<HTMLElement | HTMLLabelElement | null>;
}

function ColorPopup({
  isOpen,
  onClose,
  currentColor,
  onColorChange,
  triggerRef,
}: ColorPopupProps) {
  const [hexValue, setHexValue] = useState(currentColor);
  const [localColor, setLocalColor] = useState(currentColor);
  const popupRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);
  const lastUserColorRef = useRef(currentColor);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  useEffect(() => {
    // Only reset to currentColor if user is not actively interacting with the picker
    // AND the currentColor is different from what the user last selected
    // AND the popup is not open (to prevent resets while user is actively using the picker)
    if (
      !isUserInteractingRef.current &&
      !isOpen &&
      currentColor !== lastUserColorRef.current
    ) {
      setHexValue(currentColor);
      setLocalColor(currentColor);
      lastUserColorRef.current = currentColor;
    }
  }, [currentColor, isOpen]);

  // Initialize color when popup first opens
  useEffect(() => {
    if (isOpen && !lastUserColorRef.current) {
      // First time opening - initialize with currentColor
      setHexValue(currentColor);
      setLocalColor(currentColor);
      lastUserColorRef.current = currentColor;
    }

    if (isOpen) {
      isUserInteractingRef.current = false;
    } else {
      // When popup closes, reset interaction state
      isUserInteractingRef.current = false;
    }
  }, [isOpen]);

  // Only sync with currentColor when popup is closed or on initial load
  useEffect(() => {
    if (!isOpen && !lastUserColorRef.current) {
      setHexValue(currentColor);
      setLocalColor(currentColor);
      lastUserColorRef.current = currentColor;
    }
  }, [currentColor, isOpen]);

  // Cleanup debounce timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  // Reset interaction flag after color changes
  const resetInteractionFlag = () => {
    setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 100);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Immediately set interaction flag to prevent resets
    isUserInteractingRef.current = true;
    const value = e.target.value.toUpperCase();
    const newHex = `#${value}`;

    setHexValue(newHex);

    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      setLocalColor(newHex);
      lastUserColorRef.current = newHex;
      // Apply theme immediately for valid hex colors
      onColorChange(newHex);
      resetInteractionFlag();
    }
    // Don't update localColor for invalid hex to keep the picker in sync
  };

  const handleColorPickerChange = (color: string) => {
    // Immediately set interaction flag to prevent resets
    isUserInteractingRef.current = true;
    lastUserColorRef.current = color;
    setHexValue(color);
    setLocalColor(color);
    // Apply theme immediately for better UX
    onColorChange(color);
    resetInteractionFlag();
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
    <>
      {viewportWidth < 640 && <div className="" onClick={onClose} />}

      <div
        ref={popupRef}
        className="absolute bg-popover rounded-lg shadow-xl border border-border p-3 sm:p-4 z-50 w-[calc(100vw-1.5rem)] max-w-[280px] sm:w-[280px]"
        style={{
          bottom: `100%`,
          left: `0`,
        }}
      >
        {/* Rest of the content remains the same */}
        <div className="space-y-3">
          {/* Color Picker */}
          <div className="flex justify-center">
            <div className="w-full aspect-square max-h-44 sm:max-h-48">
              <HexColorPicker
                color={localColor}
                onChange={handleColorPickerChange}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* Current Color Preview and Hex Input */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded border border-border flex-shrink-0"
              style={{ backgroundColor: localColor }}
            />
            <div className="flex-1 min-w-0">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-muted-foreground text-xs sm:text-sm">
                  #
                </span>
                <Input
                  value={hexValue.slice(1)}
                  onChange={handleHexChange}
                  placeholder="000000"
                  className="pl-5 text-xs sm:text-sm h-8 sm:h-9"
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
            className="text-xs px-2 h-7"
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-2 h-7"
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
}

export default function GeneralSettingsContent() {
  const {
    theme,
    savedTheme,
    hasUnsavedChanges: hasThemeChanges,
    updateTheme,
    setPrimaryColor,
    setTemporaryTheme,
    saveTheme,
    resetTemporaryChanges: resetThemeChanges,
  } = useTheme();

  const {
    navigation,
    savedNavigation,
    hasUnsavedChanges: hasNavigationChanges,
    setLayout,
    saveNavigation,
    resetTemporaryChanges: resetNavigationChanges,
  } = useNavigation();

  const [isColorPopupOpen, setIsColorPopupOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const colorTriggerRef = useRef<HTMLLabelElement>(null);

  const currentColor = theme.primary;
  const currentMode = theme.mode;
  const currentLayout = navigation.layout;

  // Combined check for any unsaved changes
  const hasUnsavedChanges = hasThemeChanges || hasNavigationChanges;

  // Handle save for both theme and navigation
  const handleSave = async () => {
    console.log('💾 handleSave started:', {
      hasThemeChanges,
      hasNavigationChanges,
      currentTheme: theme.primary,
      currentLayout: navigation.layout,
    });

    setIsSaving(true);
    try {
      // Save theme if there are changes
      if (hasThemeChanges) {
        console.log('💾 Saving theme...');
        saveTheme();
      }

      // Save navigation if there are changes
      if (hasNavigationChanges) {
        console.log('💾 Saving navigation...');
        saveNavigation();
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('💾 Settings saved successfully');
    } catch (error) {
      console.error('💾 Failed to save settings:', error);
    } finally {
      setIsSaving(false);
      console.log('💾 handleSave completed');
    }
  };

  const handleResetChanges = () => {
    if (hasThemeChanges) {
      resetThemeChanges();
    }
    if (hasNavigationChanges) {
      resetNavigationChanges();
    }
  };

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
  };

  const handleModeChange = (mode: 'light' | 'dark') => {
    setTemporaryTheme({ mode });
  };

  const handleLayoutChange = (layout: NavigationLayout) => {
    setLayout(layout);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="gap-6">
          <div className="space-y-6">
            {/* Navigation */}
            <Card className="py-0">
              <CardContent className="p-4 space-y-4">
                <Label className="text-sm font-medium text-foreground">
                  Navigation
                </Label>
                <RadioGroup
                  value={currentLayout}
                  onValueChange={handleLayoutChange}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="topbar"
                      id="topbar"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="topbar"
                      className={`cursor-pointer px-3 py-2 rounded-md border flex items-center gap-2 flex-1 ${
                        currentLayout === 'topbar'
                          ? 'bg-primary/10 border-primary/20'
                          : 'bg-card border-border'
                      }`}
                    >
                      <LayoutIcon size={28} />
                      <div>
                        <div className="text-sm font-medium">Top Bar</div>
                        <div className="text-xs text-muted-foreground">
                          Header navigation
                        </div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="sidebar"
                      id="sidebar"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="sidebar"
                      className={`cursor-pointer px-3 py-2 rounded-md border flex items-center gap-2 flex-1 ${
                        currentLayout === 'sidebar'
                          ? 'bg-primary/10 border-primary/20'
                          : 'bg-card border-border'
                      }`}
                    >
                      <SidebarIcon size={28} />
                      <div>
                        <div className="text-sm font-medium">Side Bar</div>
                        <div className="text-xs text-muted-foreground">
                          Sidebar navigation
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
                <p className="text-xs text-muted-foreground">
                  Select the navigation layout for the dashboard.
                </p>
              </CardContent>
            </Card>
            {/* Theme */}
            <Card className="py-0">
              <CardContent className="p-4 space-y-4">
                <Label className="text-sm font-medium text-foreground">
                  Theme
                </Label>
                <RadioGroup
                  value={currentMode === 'system' ? 'light' : currentMode}
                  onValueChange={handleModeChange}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="light"
                      id="light"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="light"
                      className={`cursor-pointer px-4 py-2 rounded-md border flex items-center gap-2 ${
                        currentMode === 'light'
                          ? 'bg-primary/10 border-primary/20'
                          : 'bg-card border-border'
                      }`}
                    >
                      <SunIcon size={18} />
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="dark"
                      id="dark"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="dark"
                      className={`cursor-pointer px-4 py-2 rounded-md border flex items-center gap-2 ${
                        currentMode === 'dark'
                          ? 'bg-primary/10 border-primary/20'
                          : 'bg-card border-border'
                      }`}
                    >
                      <MoonIcon size={18} />
                      Dark
                    </Label>
                  </div>
                </RadioGroup>
                <p className="text-xs text-muted-foreground">
                  Light or Dark mode for the app interface.
                </p>
              </CardContent>
            </Card>
            {/* Color Theme */}
            <Card className="py-0">
              <CardContent className="p-4 space-y-4">
                <Label className="text-sm font-medium text-foreground">
                  Brand Color
                </Label>
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center space-x-2">
                    <Label
                      ref={colorTriggerRef}
                      onClick={() => setIsColorPopupOpen(true)}
                      className="cursor-pointer px-4 py-2 rounded-md border flex items-center gap-2 bg-card border-border hover:bg-accent"
                    >
                      <div
                        className="w-5 h-5 rounded border border-border"
                        style={{ backgroundColor: currentColor }}
                      />
                      <span className="text-sm font-mono text-foreground">
                        {currentColor}
                      </span>
                    </Label>
                    {/* Color Popup */}
                    <ColorPopup
                      isOpen={isColorPopupOpen}
                      onClose={() => setIsColorPopupOpen(false)}
                      currentColor={currentColor}
                      onColorChange={handleColorChange}
                      triggerRef={colorTriggerRef}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Choose your brand color for the interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          {hasUnsavedChanges && (
            <Button
              variant="outline"
              onClick={handleResetChanges}
              disabled={isSaving}
            >
              Reset Changes
            </Button>
          )}
          <Button
            onClick={handleSave}
            disabled={isSaving || !hasUnsavedChanges}
            className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
          >
            {isSaving
              ? 'Saving...'
              : hasUnsavedChanges
              ? 'Save Settings'
              : 'No Changes to Save'}
          </Button>
        </div>
      </div>
    </>
  );
}
