'use client';
import { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useProgress } from '@/hooks/use-progress';
import { settingsSections } from '../main';
import {
  FadersIcon,
  BuildingIcon,
  LockSimpleIcon,
  UsersIcon,
} from '@phosphor-icons/react';

interface SettingsSidebarProps {
  activeSectionId: string;
}

export default function SettingsSidebar({
  activeSectionId,
}: SettingsSidebarProps) {
  const { navigateWithProgress } = useProgress();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    const handleMouseEnter = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', handleScroll);
      navElement.addEventListener('mouseenter', handleMouseEnter);
      navElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', handleScroll);
        navElement.removeEventListener('mouseenter', handleMouseEnter);
        navElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector('.bg-primary');
      if (activeButton) {
        const containerRect = navRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const scrollLeft =
          buttonRect.left -
          containerRect.left -
          containerRect.width / 2 +
          buttonRect.width / 2;
        navRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSectionId]);

  const sectionIcons = {
    general: FadersIcon,
    profile: UsersIcon,
    organization: BuildingIcon,
    security: LockSimpleIcon,
  };

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'general') {
      navigateWithProgress('/settings');
    } else {
      navigateWithProgress(`/settings/${sectionId}`);
    }
  };

  return (
    <div className="lg:sticky lg:top-4">
      <nav
        ref={navRef}
        className={`w-full flex flex-row lg:flex-col rounded-xl gap-1 border border-border bg-card shadow-sm p-2 overflow-x-auto lg:overflow-x-visible ${
          isScrolling ? 'scrolling' : ''
        }`}
      >
        {settingsSections.map((section) => {
          const Icon = sectionIcons[section.id as keyof typeof sectionIcons];
          const isActive = activeSectionId === section.id;

          return (
            <button
              key={section.id}
              onClick={() => handleNavigation(section.id)}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors flex-shrink-0 cursor-pointer ${
                isActive
                  ? 'text-primary-foreground bg-primary'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon size={18} className="shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{section.title}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
