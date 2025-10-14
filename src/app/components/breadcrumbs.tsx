'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Breadcrumb mapping configuration
const breadcrumbMap: Record<string, { label: string; href?: string }[]> = {
  '/dashboard': [{ label: 'Dashboard' }],
  '/display-management': [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Display Management' },
  ],
  '/prayer-times': [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Prayer Times' },
  ],
  '/announcement': [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Announcements' },
  ],
  '/settings': [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' },
  ],
};

export function Breadcrumbs() {
  const pathname = usePathname();

  // Generate breadcrumbs based on current pathname
  const breadcrumbs = useMemo(() => {
    // Check for exact match first
    if (breadcrumbMap[pathname]) {
      return breadcrumbMap[pathname];
    }

    // Check for partial matches (for nested routes)
    const matchingKey = Object.keys(breadcrumbMap).find(
      (key) => pathname.startsWith(key) && key !== '/dashboard'
    );

    if (matchingKey) {
      const baseBreadcrumbs = breadcrumbMap[matchingKey];

      // Get the remaining path segments
      const remainingPath = pathname.slice(matchingKey.length);
      const segments = remainingPath.split('/').filter(Boolean);

      // Add additional breadcrumb items for nested paths
      const additionalBreadcrumbs = segments.map((segment, index) => {
        const formattedLabel = segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return {
          label: formattedLabel,
          // Only add href if it's not the last segment
          href: index < segments.length - 1
            ? `${matchingKey}/${segments.slice(0, index + 1).join('/')}`
            : undefined,
        };
      });

      return [...baseBreadcrumbs.slice(0, -1), ...additionalBreadcrumbs];
    }

    // Default fallback
    return [{ label: 'Dashboard', href: '/dashboard' }];
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.label} className="flex items-center gap-2">
            {index > 0 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
            <BreadcrumbItem className={index === 0 ? 'hidden md:block' : ''}>
              {crumb.href ? (
                <BreadcrumbLink href={crumb.href}>
                  {crumb.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
