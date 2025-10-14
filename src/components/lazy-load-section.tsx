'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyLoadSectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Lazy loads content when it enters the viewport using Intersection Observer
 */
export function LazyLoadSection({
  children,
  fallback = <div className="h-96 bg-muted animate-pulse rounded" />,
  rootMargin = '200px',
  threshold = 0.01,
}: LazyLoadSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return <div ref={ref}>{isVisible ? children : fallback}</div>;
}
