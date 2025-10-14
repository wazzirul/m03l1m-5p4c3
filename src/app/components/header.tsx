'use client';

import { MagnifyingGlassIcon, CaretUpIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLogout } from '@/hooks/useLogout';
import { useTheme } from '@/contexts/ThemeContext';
import MobileMenu from '@/app/components/mobileMenu';
import HeaderNav from '@/app/components/headerNav';
import { AuthUser } from '@/lib/auth-guard';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';

interface HeaderProps {
  user: AuthUser;
}

export default function Header({ user }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { logout, isLoggingOut } = useLogout();
  const { theme, toggleMode, isLoading } = useTheme();

  // Get display name from user data
  const displayName = user.name || user.email || 'User';
  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Display Management', href: '/display-management' },
    { label: 'Prayer Times', href: '/prayer-times' },
    { label: 'Announcements', href: '/announcement' },
  ];
  // Find the most specific match (longest href that matches)
  const activeIndex = menuItems.reduce((bestIndex, item, index) => {
    if (item.href === '#') return bestIndex;

    const isExactMatch = item.href === pathname;

    // Only apply nested matching if it's NOT the 'Dashboard' item
    const isNestedMatch =
      item.label !== 'Dashboard' && pathname.startsWith(item.href + '/');

    if (isExactMatch || isNestedMatch) {
      if (
        bestIndex === -1 ||
        item.href.length > menuItems[bestIndex].href.length
      ) {
        return index;
      }
    }

    return bestIndex;
  }, -1);

  return (
    <header className="position-relative bg-primary">
      {/* full width no container just little padding with maximum width, give padd y too and min height and a dark green background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo - Title */}
          <div className="flex items-center gap-2 order-1">
            <Logo className="w-8 h-8" />
          </div>
          {/* Desktop Menu */}
          <HeaderNav items={menuItems} activeIndex={activeIndex} />
          {/* Search */}
          <div className="flex ml-auto order-3 items-center gap-2 h-10 font-medium cursor-pointer px-2 py-1 hover:bg-primary/90 rounded-md text-primary-foreground hover:text-primary-foreground transition-all duration-200 ease-out">
            <MagnifyingGlassIcon size={20} />
            Search
          </div>
          {/* User Menu */}
          <div className="flex order-2 xl:order-4 items-center h-[64px]">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 h-10 cursor-pointer px-2 py-1 hover:bg-primary/90 rounded-md text-primary-foreground hover:text-primary-foreground transition-all duration-200 ease-out"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold line-clamp-1 max-w-[140px] text-left">
                      Islamic Center of North London
                    </span>
                    <span className="text-xs">{displayName}</span>
                  </div>
                  <CaretUpIcon
                    size={14}
                    className={`transition-transform duration-200 ${
                      open ? 'rotate-0' : 'rotate-180'
                    }`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={toggleMode}
                  disabled={isLoading}
                >
                  <div className="flex items-center gap-2">
                    {theme.mode === 'dark' ? (
                      <SunIcon size={16} />
                    ) : (
                      <MoonIcon size={16} />
                    )}
                    {theme.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    setOpen(false);
                    await logout();
                  }}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? 'Signing out...' : 'Logout'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Mobile Menu - Toggle */}
          <div className="order-4 xl:hidden">
            <MobileMenu items={menuItems} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </header>
  );
}
