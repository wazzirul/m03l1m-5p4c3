'use client';

import { useNavigation } from '@/contexts/NavigationContext';
import { AuthUser } from '@/lib/auth-guard';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header = dynamic(() => import('@/app/components/header'), {
  loading: () => <div className="h-16 bg-primary animate-pulse" />,
});

const SidebarLayout = dynamic(() => import('@/app/components/sidebarLayout'), {
  loading: () => <div className="h-screen bg-muted animate-pulse" />,
});

interface LayoutSwitcherProps {
  user: AuthUser;
  children: React.ReactNode;
}

export function LayoutSwitcher({ user, children }: LayoutSwitcherProps) {
  const { navigation, isLoading } = useNavigation();

  // Show loading state while navigation is being loaded
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Render Sidebar layout
  if (navigation.layout === 'sidebar') {
    return (
      <Suspense fallback={<div className="h-screen bg-muted animate-pulse" />}>
        <SidebarLayout user={user}>
          {children}
        </SidebarLayout>
      </Suspense>
    );
  }

  // Render Top Bar layout (default)
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<div className="h-16 bg-primary animate-pulse" />}>
        <Header user={user} />
      </Suspense>

      <div className="flex-1">
        <main className="w-full h-auto max-w-[1440px] mx-auto md:px-6 lg:px-8 lg2:px-12 xl:px-28">
          <div className="md:shadow-md md:rounded-2xl bg-card mx-auto max-w-[1440px] min-h-[620px] h-auto md:mt-6 p-4 sm:p-6 md:p-8 transition-all duration-300 ease-in-out opacity-100 transform translate-y-0">
            {children}
          </div>
        </main>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-auto pt-10 mb-8">
        <p>© 2025 Muslim Spaces. All rights reserved.</p>
      </footer>
    </div>
  );
}
