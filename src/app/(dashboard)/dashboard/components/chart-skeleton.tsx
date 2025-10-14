import { Card } from '@/components/ui/card';

export function ChartSkeleton() {
  return (
    <Card className="p-6">
      <div className="space-y-4 animate-pulse">
        {/* Date Filter Skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-10 w-32 bg-muted rounded" />
          <div className="h-10 w-32 bg-muted rounded" />
          <div className="h-10 w-32 bg-muted rounded" />
        </div>
        
        {/* Chart Area Skeleton */}
        <div className="h-[400px] bg-muted rounded flex items-end justify-around p-8 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-muted-foreground/20 rounded-t w-full"
              style={{ height: `${Math.random() * 60 + 40}%` }}
            />
          ))}
        </div>
        
        {/* Legend Skeleton */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-4 w-24 bg-muted rounded" />
        </div>
      </div>
    </Card>
  );
}
