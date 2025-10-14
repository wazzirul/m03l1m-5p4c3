interface LayoutThumbProps {
  type: 'L-Layout' | 'Left Layout' | 'Bottom Layout' | 'Right Layout';
}

export const LayoutThumb = ({ type }: LayoutThumbProps) => (
  <div className="w-full h-24 bg-muted rounded overflow-hidden p-1">
    {type === 'L-Layout' && (
      <div className="flex flex-col h-full gap-1">
        {/* Main content area with sidebar */}
        <div className="flex flex-1 gap-1">
          {/* Left sidebar with 3 blocks */}
          <div className="w-[18%] flex flex-col gap-1">
            <div className="h-2 bg-slate-300 rounded"></div>
            <div className="h-2 bg-slate-300 rounded"></div>
            <div className="flex-1 bg-slate-300 rounded"></div>
          </div>
          {/* Canvas area */}
          <div className="flex-1 bg-muted-foreground/20 rounded"></div>
        </div>
        {/* Bottom footer bar */}
        <div className="h-3 bg-slate-300 rounded"></div>
      </div>
    )}

    {type === 'Left Layout' && (
      <div className="flex h-full gap-1">
        {/* Left sidebar with 3 blocks */}
        <div className="w-[20%] flex flex-col gap-1">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="flex-1 bg-slate-300 rounded"></div>
        </div>
        {/* Canvas area */}
        <div className="flex-1 bg-muted-foreground/20 rounded"></div>
      </div>
    )}

    {type === 'Bottom Layout' && (
      <div className="flex flex-col h-full gap-1">
        {/* Top row with 3 blocks */}
        <div className="flex gap-1 h-2 justify-between">
          <div className="flex-1 bg-slate-300 rounded max-w-[33%]"></div>
          <div className="flex-1 bg-slate-300 rounded max-w-[33%]"></div>
        </div>
        {/* Canvas area */}
        <div className="flex-1 bg-muted-foreground/20 rounded"></div>
        {/* Bottom footer bar */}
        <div className="h-3 bg-slate-300 rounded"></div>
      </div>
    )}

    {type === 'Right Layout' && (
      <div className="flex h-full gap-1">
        {/* Canvas area */}
        <div className="flex-1 bg-muted-foreground/20 rounded"></div>
        {/* Right sidebar with 3 blocks */}
        <div className="w-[20%] flex flex-col gap-1">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="flex-1 bg-slate-300 rounded"></div>
        </div>
      </div>
    )}
  </div>
);
