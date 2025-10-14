import React from 'react';
import { DASHBOARD_SECTIONS } from '@/constants/dashboard';

interface DashboardSectionProps {
  section: (typeof DASHBOARD_SECTIONS)[number];
  children: React.ReactNode;
}

export function DashboardSection({ section, children }: DashboardSectionProps) {
  const Icon = section.icon;

  return (
    <div
      id={section.id}
      className="min-h-[600px] rounded-md border border-border bg-card shadow-md px-5 py-4 scroll-mt-24"
    >
      <header className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-card-foreground flex items-center gap-2">
          <Icon size={24} />
          {section.title}
        </h2>
        <p className="text-muted-foreground">{section.description}</p>
      </header>
      {children}
    </div>
  );
}
