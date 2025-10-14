'use client';

import { useEffect, Suspense, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import { resetProgressState } from '@/lib/router-progress';

// Configure NProgress to match Link behavior exactly
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: 'ease',
  speed: 300, // Faster completion
});

function ProgressBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip progress on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Complete progress when route change is done
    const handleComplete = () => {
      NProgress.done();
      resetProgressState(); // Reset the router wrapper state
    };

    // Complete progress immediately when pathname/searchParams change
    handleComplete();
  }, [pathname, searchParams]);

  useEffect(() => {
    // Add click listeners to all navigation links to ensure consistent behavior
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (
        link &&
        link.href &&
        !link.href.startsWith('mailto:') &&
        !link.href.startsWith('tel:') &&
        !link.href.startsWith('javascript:') &&
        !link.target &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        e.button === 0
      ) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only start progress for different pages
        if (
          url.pathname !== currentUrl.pathname ||
          url.search !== currentUrl.search
        ) {
          NProgress.start();
        }
      }
    };

    // Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      NProgress.start();
    };

    // Add event listeners
    document.addEventListener('click', handleLinkClick, true); // Use capture phase
    window.addEventListener('popstate', handlePopState);

    return () => {
      // Remove event listeners
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
}
