import {
  ImageIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  BookIcon,
  ClockIcon,
} from '@phosphor-icons/react';
import { ContentType } from '@/app/(dashboard)/display-management/types/displayTypes';

interface ContentDropdownProps {
  selectedContent: ContentType;
  setSelectedContent: (content: ContentType) => void;
  setActiveDropdown: (dropdown: string | null) => void;
}

export const ContentDropdown = ({
  selectedContent,
  setSelectedContent,
  setActiveDropdown,
}: ContentDropdownProps) => {
  return (
    <div className="absolute top-full mt-4 z-10 left-0 w-full min-h-[300px] shadow-lg rounded-2xl bg-card p-6 border border-border">
      <h3 className="text-lg font-semibold mb-4">Select Content</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Next Prayer Times */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md flex items-center gap-3 ${
            selectedContent === 'Next Prayer Times'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedContent('Next Prayer Times');
            setActiveDropdown(null);
          }}
        >
          <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center">
            <ClockIcon className="text-teal-600" size={16} />
          </div>
          <h4 className="font-medium text-sm">Next Prayer Times</h4>
        </div>

        {/* Images */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md flex items-center gap-3 ${
            selectedContent === 'Images'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedContent('Images');
            setActiveDropdown(null);
          }}
        >
          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
            <ImageIcon className="text-green-600" size={16} />
          </div>
          <h4 className="font-medium text-sm">Images</h4>
        </div>

        {/* Videos */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md flex items-center gap-3 ${
            selectedContent === 'Videos'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedContent('Videos');
            setActiveDropdown(null);
          }}
        >
          <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
            <VideoCameraIcon className="text-purple-600" size={16} />
          </div>
          <h4 className="font-medium text-sm">Videos</h4>
        </div>

        {/* Announcements */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md flex items-center gap-3 ${
            selectedContent === 'Announcements'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedContent('Announcements');
            setActiveDropdown(null);
          }}
        >
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <MegaphoneIcon className="text-blue-600" size={16} />
          </div>
          <h4 className="font-medium text-sm">Announcements</h4>
        </div>

        {/* Quran Verse */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md flex items-center gap-3 ${
            selectedContent === 'Quran Verse'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedContent('Quran Verse');
            setActiveDropdown(null);
          }}
        >
          <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">
            <BookIcon className="text-amber-600" size={16} />
          </div>
          <h4 className="font-medium text-sm">Quran Verse</h4>
        </div>
      </div>
    </div>
  );
};
