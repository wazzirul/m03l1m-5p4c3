'use client';

import { Card } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  progress?: number;
  content?: React.ReactNode;
}

export function StatsCard({
  title,
  value,
  subtitle,
  trend,
  progress,
  content
}: StatsCardProps) {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="space-y-2">
          <p className={`font-bold ${content ? 'text-lg' : 'text-2xl'}`}>
            {value}
          </p>
          {progress !== undefined && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">{progress}% completed</p>
            </div>
          )}
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <p className={`text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↗' : '↘'} {trend.value}
            </p>
          )}
          {content && content}
        </div>
      </div>
    </Card>
  );
}
