import React, { useCallback, useEffect, useState } from 'react';
import { DASHBOARD_SECTIONS } from '@/constants/dashboard';
import { useTheme } from '@/contexts/ThemeContext';

interface DashboardNavigationProps {
  sections: typeof DASHBOARD_SECTIONS;
  activeSection: string;
}

export function DashboardNavigation({
  sections,
  activeSection,
}: DashboardNavigationProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only applying theme after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -96; // Offset for sticky header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="col-span-1 hidden lg:block">
      <div className="sticky top-4 z-10">
        <nav className="w-full flex flex-col gap-1 rounded-xl border border-border bg-card shadow-md p-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 text-left w-full ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                aria-current={isActive ? 'true' : undefined}
                suppressHydrationWarning={!mounted}
              >
                <Icon size={18} className="shrink-0" />
                <span>{section.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
