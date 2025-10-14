'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export type NavigationLayout = 'topbar' | 'sidebar';

export interface NavigationConfig {
  layout: NavigationLayout;
  lastModified: number;
}

const DEFAULT_NAVIGATION: NavigationConfig = {
  layout: 'topbar',
  lastModified: Date.now(),
};

const STORAGE_KEY = 'muslim-spaces-navigation';

// Debounce utility function
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const useNavigation = () => {
  const [navigation, setNavigation] = useState<NavigationConfig>(DEFAULT_NAVIGATION);
  const [tempNavigation, setTempNavigation] = useState<NavigationConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  // Ref for debounced save function
  const debouncedSaveRef = useRef<((config: NavigationConfig) => void) | null>(null);

  // Initialize debounced save function
  useEffect(() => {
    debouncedSaveRef.current = debounce((config: NavigationConfig) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
        console.log('Debounced save to localStorage:', config);
      } catch (error) {
        console.warn('Failed to save navigation to localStorage:', error);
      }
    }, 300);
  }, []);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load navigation from localStorage on client mount
  useEffect(() => {
    if (!isClient) return;

    console.log('Navigation initialization started');
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      console.log('localStorage content:', stored);

      if (stored) {
        const parsedNavigation = JSON.parse(stored) as NavigationConfig;
        console.log('Parsed navigation from localStorage:', parsedNavigation);
        setNavigation(parsedNavigation);
      } else {
        console.log('No stored navigation, using default:', DEFAULT_NAVIGATION);
      }
    } catch (error) {
      console.warn('Failed to load navigation from localStorage:', error);
    } finally {
      setIsLoading(false);
      console.log('Navigation initialization completed');
    }
  }, [isClient]);

  // Update navigation (saves with debouncing)
  const updateNavigation = useCallback(
    (updates: Partial<NavigationConfig>) => {
      if (!isClient) return;

      console.log('updateNavigation called:', {
        currentNavigation: navigation,
        updates,
        willBecomeNavigation: { ...navigation, ...updates },
      });

      const newNavigation: NavigationConfig = {
        ...navigation,
        ...updates,
        lastModified: Date.now(),
      };

      console.log('Setting new permanent navigation:', newNavigation);
      setNavigation(newNavigation);

      // Use debounced save to localStorage
      if (debouncedSaveRef.current) {
        debouncedSaveRef.current(newNavigation);
      }
    },
    [navigation, isClient]
  );

  // Set layout (temporary, not saved)
  const setLayout = useCallback(
    (layout: NavigationLayout) => {
      console.log('setLayout called:', {
        newLayout: layout,
        currentSavedNavigation: navigation,
        currentTempNavigation: tempNavigation,
      });

      const newTempNavigation: NavigationConfig = {
        ...(tempNavigation || navigation),
        layout,
        lastModified: Date.now(),
      };

      console.log('Creating new temporary navigation:', newTempNavigation);
      setTempNavigation(newTempNavigation);
    },
    [navigation, tempNavigation]
  );

  // Set temporary navigation (for preview without saving)
  const setTemporaryNavigation = useCallback(
    (updates: Partial<NavigationConfig>) => {
      const newTempNavigation: NavigationConfig = {
        ...(tempNavigation || navigation),
        ...updates,
        lastModified: Date.now(),
      };
      setTempNavigation(newTempNavigation);
    },
    [navigation, tempNavigation]
  );

  // Save temporary navigation as permanent
  const saveNavigation = useCallback(() => {
    if (!isClient) return;

    console.log('saveNavigation called:', {
      hasTempNavigation: !!tempNavigation,
      tempNavigation,
      currentSavedNavigation: navigation,
    });

    if (tempNavigation) {
      console.log('Saving temporary navigation as permanent:', tempNavigation);
      setNavigation(tempNavigation);

      // Use debounced save to localStorage
      if (debouncedSaveRef.current) {
        debouncedSaveRef.current(tempNavigation);
      }

      console.log('Clearing temporary navigation');
      setTempNavigation(null);
    } else {
      console.log('No temporary navigation to save');
    }
  }, [tempNavigation, navigation, isClient]);

  // Reset temporary changes
  const resetTemporaryChanges = useCallback(() => {
    if (tempNavigation) {
      setTempNavigation(null);
    }
  }, [tempNavigation]);

  // Reset navigation to default
  const resetNavigation = useCallback(() => {
    if (!isClient) return;

    console.log('resetNavigation called - resetting to default navigation');

    setTempNavigation(null);
    setNavigation(DEFAULT_NAVIGATION);

    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log('Removed navigation from localStorage');
    } catch (error) {
      console.warn('Failed to remove navigation from localStorage:', error);
    }

    console.log('Navigation reset to default:', DEFAULT_NAVIGATION);
  }, [isClient]);

  // Check if there are unsaved changes
  const hasUnsavedChanges = tempNavigation !== null;

  return {
    navigation: tempNavigation || navigation,
    savedNavigation: navigation,
    isLoading,
    hasUnsavedChanges,
    updateNavigation,
    setLayout,
    setTemporaryNavigation,
    saveNavigation,
    resetTemporaryChanges,
    resetNavigation,
  };
};
