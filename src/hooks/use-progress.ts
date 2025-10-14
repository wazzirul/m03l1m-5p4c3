'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import NProgress from 'nprogress';
import { wrapRouterWithProgress } from '@/lib/router-progress';

export function useProgress() {
  const router = useRouter();
  
  // Create a wrapped router that always starts progress immediately
  const progressRouter = useMemo(() => wrapRouterWithProgress(router), [router]);

  const navigateWithProgress = useCallback((path: string) => {
    // Use the wrapped router which handles progress automatically
    progressRouter.push(path);
  }, [progressRouter]);

  const replaceWithProgress = useCallback((path: string) => {
    // Use the wrapped router which handles progress automatically
    progressRouter.replace(path);
  }, [progressRouter]);

  const startProgress = useCallback(() => {
    NProgress.start();
  }, []);

  const finishProgress = useCallback(() => {
    NProgress.done();
  }, []);

  const setProgress = useCallback((value: number) => {
    NProgress.set(value);
  }, []);

  const incrementProgress = useCallback((amount?: number) => {
    NProgress.inc(amount);
  }, []);

  return {
    navigateWithProgress,
    replaceWithProgress,
    startProgress,
    finishProgress,
    setProgress,
    incrementProgress,
    // Expose the wrapped router for direct use
    router: progressRouter,
    // Legacy aliases for backward compatibility
    start: startProgress,
    done: finishProgress,
    set: setProgress,
    inc: incrementProgress,
  };
}
