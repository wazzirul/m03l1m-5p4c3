'use client';

import * as React from 'react';
import {
  LayoutDashboard,
  MonitorCog,
  Clock,
  Megaphone,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useLogout } from '@/hooks/useLogout';
import { useTheme } from '@/contexts/ThemeContext';
import { AuthUser } from '@/lib/auth-guard';

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: AuthUser;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout, isLoggingOut } = useLogout();
  const { theme, toggleMode, isLoading } = useTheme();

  const navMain = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      isActive: pathname === '/dashboard',
    },
    {
      title: 'Display Management',
      url: '/display-management',
      icon: MonitorCog,
      isActive: pathname.startsWith('/display-management'),
    },
    {
      title: 'Prayer Times',
      url: '/prayer-times',
      icon: Clock,
      isActive: pathname.startsWith('/prayer-times'),
    },
    {
      title: 'Announcements',
      url: '/announcement',
      icon: Megaphone,
      isActive: pathname.startsWith('/announcement'),
    },
  ];

  return (
    <Sidebar variant="inset" {...props} collapsible='icon'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard" className="flex items-center gap-2 font-medium">
                <div className="flex size-6 items-center justify-center rounded-md">
                  <svg
                    width="133"
                    height="133"
                    viewBox="0 0 133 133"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="invert dark:invert-0"
                  >
                    <path
                      d="M51.7333 2.13333C26 8.26667 6.53334 29.0667 1.20001 55.7333C-1.19999 67.4667 1.06667 82.6667 7.33334 95.7333C19.3333 121.2 48.1333 136.533 75.7333 132.267C105.467 127.6 127.6 105.467 132.267 75.7333C139.2 30.6667 96.1333 -8.66667 51.7333 2.13333ZM72.2667 37.3333C78.1333 39.0667 84.6667 44.2667 87.3333 49.4667C89.7333 53.8667 90 65.6 87.8667 69.7333C81.4667 82 66.8 86.6667 55.0667 80.1333C34.5333 68.5333 42 38.5333 66 36.1333C66.8 36.1333 69.6 36.6667 72.2667 37.3333ZM86.6667 96V101.333H66H45.3333V96V90.6667H66H86.6667V96Z"
                      fill="white"
                    />
                    <path
                      d="M57.2 50.5333C54.1334 53.6 53.3334 55.6 53.3334 60C53.3334 67.0666 58.9334 73.3333 65.3334 73.3333C76.6667 73.3333 83.0667 63.2 78 53.3333C73.8667 45.4666 63.7334 44.1333 57.2 50.5333Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className='text-base'>
                  Muslim Spaces
                </p>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name || 'User',
            email: user.email || '',
            avatar: '',
          }}
          onLogout={logout}
          onToggleTheme={toggleMode}
          themeMode={theme.mode}
          isLoggingOut={isLoggingOut}
          isThemeLoading={isLoading}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
