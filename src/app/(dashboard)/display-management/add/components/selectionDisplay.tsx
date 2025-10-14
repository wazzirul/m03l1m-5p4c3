'use client';
import { useRef } from 'react';
import {
  CaretUpIcon,
  MonitorIcon,
  ImageIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  BookIcon,
  ClockIcon,
} from '@phosphor-icons/react';
import { LayoutDropdown } from './selectionDisplayLayoutDropdown';
import { StyleDropdown } from './selectionDisplayStyleDropdown';
import { ContentDropdown } from './selectionDisplayContentDropdown';
import { ColorPopup } from './selectionDisplayColorPopUp';
import {
  LayoutType,
  ContentType,
} from '@/app/(dashboard)/display-management/types/displayTypes';
import { StyleType, layoutToDisplay } from '@/types/display';

interface TemplateStyle {
  name: string;
  bottomLayout: any;
  leftLayout: any;
  rightLayout: any;
  lLayout: any;
}

interface SelectionDisplayProps {
  selectedLayout: LayoutType;
  selectedStyle: StyleType;
  selectedContent: ContentType;
  selectedColor: string;
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  setSelectedLayout: (layout: LayoutType) => void;
  setSelectedStyle: (style: StyleType) => void;
  setSelectedContent: (content: ContentType) => void;
  setSelectedColor: (color: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  colorPopup: {
    isOpen: boolean;
    colorType: string;
    currentColor: string;
  };
  setColorPopup: (popup: {
    isOpen: boolean;
    colorType: string;
    currentColor: string;
  }) => void;
  templateStyles: TemplateStyle[];
}

export const SelectionDisplay = ({
  selectedLayout,
  selectedStyle,
  selectedContent,
  selectedColor,
  activeDropdown,
  setActiveDropdown,
  setSelectedLayout,
  setSelectedStyle,
  setSelectedContent,
  setSelectedColor,
  dropdownRef,
  colorPopup,
  setColorPopup,
  templateStyles,
}: SelectionDisplayProps) => {
  const themeColorRef = useRef<HTMLDivElement>(null);
  const primaryColorRef = useRef<HTMLDivElement>(null);
  const secondaryColorRef = useRef<HTMLDivElement>(null);
  const getContentIcon = () => {
    switch (selectedContent) {
      case 'Images':
        return <ImageIcon className="w-6 h-6" />;
      case 'Announcements':
        return <MegaphoneIcon className="w-6 h-6" />;
      case 'Videos':
        return <VideoCameraIcon className="w-6 h-6" />;
      case 'Quran Verse':
        return <BookIcon className="w-6 h-6" />;
      case 'Next Prayer Times':
        return <ClockIcon className="w-6 h-6" />;
      default:
        return <MonitorIcon className="w-6 h-6" />;
    }
  };

  console.log('selectedContent : ', selectedContent);

  return (
    <div className="mt-6">
      <div
        className="relative grid grid-cols-1 md:grid-cols-4 gap-4"
        ref={dropdownRef}
      >
        <div
          className="p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-400 relative cursor-pointer"
          onClick={() =>
            setActiveDropdown(activeDropdown === 'layout' ? null : 'layout')
          }
        >
          <h2 className="text-lg font-semibold mb-2">Layout</h2>
          <div className="flex items-center gap-2 mt-2">
            <MonitorIcon className="w-6 h-6" />
            <p>{layoutToDisplay(selectedLayout)}</p>
          </div>
          <CaretUpIcon
            className={`w-6 h-6 absolute top-0 bottom-0 right-4 my-auto transition-transform ${
              activeDropdown === 'layout' ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div
          className="p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-400 relative cursor-pointer"
          onClick={() =>
            setActiveDropdown(activeDropdown === 'style' ? null : 'style')
          }
        >
          <h2 className="text-lg font-semibold mb-2">Style</h2>
          <div className="flex items-center gap-2 mt-2">
            <MonitorIcon className="w-6 h-6" />
            <p>{selectedStyle}</p>
          </div>
          <CaretUpIcon
            className={`w-6 h-6 absolute top-0 bottom-0 right-4 my-auto ${
              activeDropdown === 'style' ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div
          className="p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-400 relative cursor-pointer"
          onClick={() =>
            setActiveDropdown(activeDropdown === 'content' ? null : 'content')
          }
        >
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <div className="flex items-center gap-2 mt-2">
            {getContentIcon()}
            <p>{selectedContent}</p>
          </div>
          <CaretUpIcon
            className={`w-6 h-6 absolute top-0 bottom-0 right-4 my-auto ${
              activeDropdown === 'content' ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div className="p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-400 relative">
          <h2 className="text-lg font-semibold mb-2">Color</h2>
          <div className="flex items-center gap-2 mt-2">
            {(() => {
              try {
                const colors = JSON.parse(selectedColor);
                const hasThemeColor =
                  selectedStyle === 'Light Gradient Overlay' ||
                  selectedStyle === 'Dark Gradient Overlay';
                return (
                  <>
                    {hasThemeColor && (
                      <div className="relative w-full h-6">
                        <div
                          ref={themeColorRef}
                          className="w-full h-6 rounded-xl cursor-pointer border border-neutral-50"
                          style={{
                            backgroundColor: colors.themeColor || '#FCD29A',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                          }}
                          onClick={() =>
                            setColorPopup({
                              isOpen: true,
                              colorType: 'theme',
                              currentColor: colors.themeColor || '#FCD29A',
                            })
                          }
                        ></div>
                        {/* Color dropdown */}
                        {colorPopup.isOpen &&
                          colorPopup.colorType === 'theme' && (
                            <ColorPopup
                              selectedColor={selectedColor}
                              selectedStyle={selectedStyle}
                              setSelectedColor={setSelectedColor}
                              colorType={colorPopup.colorType}
                              currentColor={colorPopup.currentColor}
                              triggerRef={themeColorRef}
                              onClose={() =>
                                setColorPopup({
                                  isOpen: false,
                                  colorType: '',
                                  currentColor: '',
                                })
                              }
                            />
                          )}
                      </div>
                    )}
                    <div className="relative w-full h-6">
                      <div
                        ref={primaryColorRef}
                        className="w-full h-6 rounded-xl cursor-pointer border border-neutral-50"
                        style={{
                          backgroundColor: colors.primaryColor || '#1a1a1a',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() =>
                          setColorPopup({
                            isOpen: true,
                            colorType: 'primary',
                            currentColor: colors.primaryColor || '#1a1a1a',
                          })
                        }
                      ></div>
                      {/* Color dropdown */}
                      {colorPopup.isOpen &&
                        colorPopup.colorType === 'primary' && (
                          <ColorPopup
                            selectedColor={selectedColor}
                            selectedStyle={selectedStyle}
                            setSelectedColor={setSelectedColor}
                            colorType={colorPopup.colorType}
                            currentColor={colorPopup.currentColor}
                            triggerRef={primaryColorRef}
                            onClose={() =>
                              setColorPopup({
                                isOpen: false,
                                colorType: '',
                                currentColor: '',
                              })
                            }
                          />
                        )}
                    </div>
                    <div className="relative w-full h-6 cursor-pointer">
                      <div
                        ref={secondaryColorRef}
                        className="w-full h-6 rounded-xl border border-neutral-50"
                        style={{
                          backgroundColor: colors.secondaryColor || '#ffffff',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() =>
                          setColorPopup({
                            isOpen: true,
                            colorType: 'secondary',
                            currentColor: colors.secondaryColor || '#ffffff',
                          })
                        }
                      ></div>
                      {/* Color dropdown */}
                      {colorPopup.isOpen &&
                        colorPopup.colorType === 'secondary' && (
                          <ColorPopup
                            selectedColor={selectedColor}
                            selectedStyle={selectedStyle}
                            setSelectedColor={setSelectedColor}
                            colorType={colorPopup.colorType}
                            currentColor={colorPopup.currentColor}
                            triggerRef={secondaryColorRef}
                            onClose={() =>
                              setColorPopup({
                                isOpen: false,
                                colorType: '',
                                currentColor: '',
                              })
                            }
                          />
                        )}
                    </div>
                  </>
                );
              } catch {
                return (
                  <>
                    <div className="relative w-full h-6">
                      <div
                        ref={themeColorRef}
                        className="w-full h-6 rounded-xl cursor-pointer border border-neutral-50"
                        style={{
                          backgroundColor: '#FCD29A',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() =>
                          setColorPopup({
                            isOpen: true,
                            colorType: 'theme',
                            currentColor: '#FCD29A',
                          })
                        }
                      ></div>
                      {/* Color dropdown */}
                      {colorPopup.isOpen &&
                        colorPopup.colorType === 'theme' && (
                          <ColorPopup
                            selectedColor={selectedColor}
                            selectedStyle={selectedStyle}
                            setSelectedColor={setSelectedColor}
                            colorType={colorPopup.colorType}
                            currentColor={colorPopup.currentColor}
                            triggerRef={themeColorRef}
                            onClose={() =>
                              setColorPopup({
                                isOpen: false,
                                colorType: '',
                                currentColor: '',
                              })
                            }
                          />
                        )}
                    </div>
                    <div className="relative w-full h-6">
                      <div
                        ref={primaryColorRef}
                        className="w-full h-6 rounded-xl cursor-pointer border border-neutral-50"
                        style={{
                          backgroundColor: '#1a1a1a',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() =>
                          setColorPopup({
                            isOpen: true,
                            colorType: 'primary',
                            currentColor: '#1a1a1a',
                          })
                        }
                      ></div>
                      {/* Color dropdown */}
                      {colorPopup.isOpen &&
                        colorPopup.colorType === 'primary' && (
                          <ColorPopup
                            selectedColor={selectedColor}
                            selectedStyle={selectedStyle}
                            setSelectedColor={setSelectedColor}
                            colorType={colorPopup.colorType}
                            currentColor={colorPopup.currentColor}
                            triggerRef={primaryColorRef}
                            onClose={() =>
                              setColorPopup({
                                isOpen: false,
                                colorType: '',
                                currentColor: '',
                              })
                            }
                          />
                        )}
                    </div>
                    <div className="relative w-full h-6 cursor-pointer">
                      <div
                        ref={secondaryColorRef}
                        className="w-full h-6 rounded-xl cursor-pointer border border-neutral-50"
                        style={{
                          backgroundColor: '#fff',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() =>
                          setColorPopup({
                            isOpen: true,
                            colorType: 'secondary',
                            currentColor: '#ffffff',
                          })
                        }
                      ></div>
                      {/* Color dropdown */}
                      {colorPopup.isOpen &&
                        colorPopup.colorType === 'secondary' && (
                          <ColorPopup
                            selectedColor={selectedColor}
                            selectedStyle={selectedStyle}
                            setSelectedColor={setSelectedColor}
                            colorType={colorPopup.colorType}
                            currentColor={colorPopup.currentColor}
                            triggerRef={secondaryColorRef}
                            onClose={() =>
                              setColorPopup({
                                isOpen: false,
                                colorType: '',
                                currentColor: '',
                              })
                            }
                          />
                        )}
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>

        {/* Layout dropdown */}
        {activeDropdown === 'layout' && (
          <LayoutDropdown
            selectedLayout={selectedLayout}
            setSelectedLayout={setSelectedLayout}
            setActiveDropdown={setActiveDropdown}
          />
        )}

        {/* Style dropdown */}
        {activeDropdown === 'style' && (
          <StyleDropdown
            selectedStyle={selectedStyle}
            selectedLayout={selectedLayout}
            setSelectedStyle={setSelectedStyle}
            setActiveDropdown={setActiveDropdown}
            templateStyles={templateStyles}
          />
        )}

        {/* Content dropdown */}
        {activeDropdown === 'content' && (
          <ContentDropdown
            selectedContent={selectedContent}
            setSelectedContent={setSelectedContent}
            setActiveDropdown={setActiveDropdown}
          />
        )}
      </div>
    </div>
  );
};
