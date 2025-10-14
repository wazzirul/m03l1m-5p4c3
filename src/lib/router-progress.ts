'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import NProgress from 'nprogress';

// Flag to track if progress is already started
let progressStarted = false;

// Create a wrapper for the router that always starts progress
export function wrapRouterWithProgress(router: AppRouterInstance) {
  const originalPush = router.push.bind(router);
  const originalReplace = router.replace.bind(router);
  const originalBack = router.back.bind(router);
  const originalForward = router.forward.bind(router);

  return {
    ...router,
    push: (href: string, options?: any) => {
      // Always start progress immediately, just like Link does
      if (!progressStarted) {
        NProgress.start();
        progressStarted = true;
        
        // Reset flag after a short delay to allow for subsequent navigations
        setTimeout(() => {
          progressStarted = false;
        }, 100);
      }
      return originalPush(href, options);
    },
    replace: (href: string, options?: any) => {
      // Always start progress immediately, just like Link does
      if (!progressStarted) {
        NProgress.start();
        progressStarted = true;
        
        // Reset flag after a short delay to allow for subsequent navigations
        setTimeout(() => {
          progressStarted = false;
        }, 100);
      }
      return originalReplace(href, options);
    },
    back: () => {
      if (!progressStarted) {
        NProgress.start();
        progressStarted = true;
        
        setTimeout(() => {
          progressStarted = false;
        }, 100);
      }
      return originalBack();
    },
    forward: () => {
      if (!progressStarted) {
        NProgress.start();
        progressStarted = true;
        
        setTimeout(() => {
          progressStarted = false;
        }, 100);
      }
      return originalForward();
    },
  };
}

// Reset progress state
export function resetProgressState() {
  progressStarted = false;
}
