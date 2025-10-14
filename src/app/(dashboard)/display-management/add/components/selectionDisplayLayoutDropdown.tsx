import { LayoutThumb } from './layoutThumb';
import { LayoutType } from '@/app/(dashboard)/display-management/types/displayTypes';

interface LayoutDropdownProps {
  selectedLayout: LayoutType;
  setSelectedLayout: (layout: LayoutType) => void;
  setActiveDropdown: (dropdown: string | null) => void;
}

export const LayoutDropdown = ({
  selectedLayout,
  setSelectedLayout,
  setActiveDropdown,
}: LayoutDropdownProps) => {
  return (
    <div className="absolute top-full mt-4 z-10 left-0 w-full min-h-[300px] shadow-lg rounded-2xl bg-card p-6 border border-border">
      <h3 className="text-lg font-semibold mb-4">Select Layout</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* L-Layout */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedLayout === 'l-layout'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedLayout('l-layout');
            setActiveDropdown(null);
          }}
        >
          <div className="mb-3">
            <LayoutThumb type="L-Layout" />
          </div>
          <h4 className="font-medium text-sm">L-Layout</h4>
        </div>

        {/* Left Layout */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedLayout === 'left'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedLayout('left');
            setActiveDropdown(null);
          }}
        >
          <div className="mb-3">
            <LayoutThumb type="Left Layout" />
          </div>
          <h4 className="font-medium text-sm">Left Layout</h4>
        </div>

        {/* Bottom Layout */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedLayout === 'bottom'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedLayout('bottom');
            setActiveDropdown(null);
          }}
        >
          <div className="mb-3">
            <LayoutThumb type="Bottom Layout" />
          </div>
          <h4 className="font-medium text-sm">Bottom Layout</h4>
        </div>

        {/* Right Layout */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedLayout === 'right'
              ? 'border-foreground bg-muted'
              : 'border-border'
          }`}
          onClick={() => {
            setSelectedLayout('right');
            setActiveDropdown(null);
          }}
        >
          <div className="mb-3">
            <LayoutThumb type="Right Layout" />
          </div>
          <h4 className="font-medium text-sm">Right Layout</h4>
        </div>
      </div>
    </div>
  );
};
