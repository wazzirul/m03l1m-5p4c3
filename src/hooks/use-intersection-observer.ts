import { useEffect, useState } from 'react';

export function useIntersectionObserver<T extends string>(
  elementIds: T[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<T>(elementIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter entries that are intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position
          const sortedEntries = visibleEntries.sort((a, b) => {
            // First, prioritize by intersection ratio
            const ratioCompare = b.intersectionRatio - a.intersectionRatio;
            if (Math.abs(ratioCompare) > 0.1) {
              return ratioCompare;
            }

            // If intersection ratios are similar, prioritize the one closer to the top
            const rectA = a.boundingClientRect;
            const rectB = b.boundingClientRect;
            return rectA.top - rectB.top;
          });

          const mostVisible = sortedEntries[0];
          const newActiveId = (mostVisible.target as HTMLElement).id as T;

          setActiveId(newActiveId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // More precise detection
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], // More threshold points
        ...options,
      }
    );

    // Observe all elements
    const elements = elementIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((element) => observer.observe(element));

    // Cleanup function
    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [elementIds]);

  return activeId;
}
