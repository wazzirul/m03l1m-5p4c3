'use client';

import { useState, useEffect, useCallback } from 'react';

export interface ThemeConfig {
  primary: string;
  mode: 'light' | 'dark' | 'system';
  lastModified: number;
}

const DEFAULT_THEME: ThemeConfig = {
  primary: '#0a0a0a', // slate-900 (neutral dark)
  mode: 'system',
  lastModified: Date.now(),
};

const STORAGE_KEY = 'muslim-spaces-theme';

// Cache for the last applied theme to avoid unnecessary DOM updates
let lastAppliedTheme: ThemeConfig | null = null;

// Apply theme to CSS variables
const applyTheme = (theme: ThemeConfig) => {
  // Skip if the same theme is already applied
  if (
    lastAppliedTheme &&
    lastAppliedTheme.primary === theme.primary &&
    lastAppliedTheme.mode === theme.mode
  ) {
    return;
  }

  const root = document.documentElement;

  // Apply primary color only if it changed - USE HEX DIRECTLY
  if (!lastAppliedTheme || lastAppliedTheme.primary !== theme.primary) {
    root.style.setProperty('--primary', theme.primary);

    // Generate primary-foreground (white for dark colors, dark for light colors)
    // Simple luminance calculation from hex
    const hex = theme.primary.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    // Calculate relative luminance using sRGB formula
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Use white text for dark backgrounds, dark text for light backgrounds
    const foregroundColor = luminance > 0.5 ? '#0a0a0a' : '#fafafa';
    root.style.setProperty('--primary-foreground', foregroundColor);
  }

  // Apply dark/light mode only if it changed
  if (!lastAppliedTheme || lastAppliedTheme.mode !== theme.mode) {
    if (theme.mode === 'dark') {
      root.classList.add('dark');
    } else if (theme.mode === 'light') {
      root.classList.remove('dark');
    } else {
      // System preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }

  // Cache the applied theme
  lastAppliedTheme = { ...theme };
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);
  const [tempTheme, setTempTheme] = useState<ThemeConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsedTheme = JSON.parse(stored) as ThemeConfig;
        setTheme(parsedTheme);
        applyTheme(parsedTheme);
      } else {
        applyTheme(DEFAULT_THEME);
      }
    } catch (error) {
      applyTheme(DEFAULT_THEME);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const currentTheme = tempTheme || theme;
    if (currentTheme.mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme(currentTheme);

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme.mode, tempTheme]);

  // Update theme (saves immediately)
  const updateTheme = useCallback(
    (updates: Partial<ThemeConfig>) => {
      const newTheme: ThemeConfig = {
        ...theme,
        ...updates,
        lastModified: Date.now(),
      };

      setTheme(newTheme);
      applyTheme(newTheme);

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
      } catch (error) {
        // Failed to save theme to localStorage
      }
    },
    [theme]
  );

  // Set primary color (temporary, not saved) - force apply immediately
  const setPrimaryColor = useCallback(
    (color: string) => {
      const newTempTheme: ThemeConfig = {
        ...(tempTheme || theme),
        primary: color,
        lastModified: Date.now(),
      };

      setTempTheme(newTempTheme);

      // Force apply theme immediately, bypassing cache
      lastAppliedTheme = null;
      applyTheme(newTempTheme);
    },
    [theme, tempTheme]
  );

  // Set temporary theme (for preview without saving)
  const setTemporaryTheme = useCallback(
    (updates: Partial<ThemeConfig>) => {
      const newTempTheme: ThemeConfig = {
        ...(tempTheme || theme),
        ...updates,
        lastModified: Date.now(),
      };
      setTempTheme(newTempTheme);
      // Force apply theme immediately, bypassing cache
      lastAppliedTheme = null;
      applyTheme(newTempTheme);
    },
    [theme, tempTheme]
  );

  // Toggle dark/light mode
  const toggleMode = useCallback(() => {
    const currentTheme = tempTheme || theme; // Use current theme (temp or saved)
    const newMode = currentTheme.mode === 'light' ? 'dark' : 'light';

    if (tempTheme) {
      // If there are unsaved changes, update the temporary theme
      setTemporaryTheme({ mode: newMode });
    } else {
      // If no unsaved changes, update and save the theme permanently
      updateTheme({ mode: newMode });
    }
  }, [theme, tempTheme, updateTheme, setTemporaryTheme]);

  // Save temporary theme as permanent
  const saveTheme = useCallback(() => {
    if (tempTheme) {
      setTheme(tempTheme);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tempTheme));
      } catch (error) {
        // Failed to save theme to localStorage
      }

      setTempTheme(null);
    }
  }, [tempTheme, theme]);

  // Reset temporary changes
  const resetTemporaryChanges = useCallback(() => {
    if (tempTheme) {
      setTempTheme(null);
      // Force apply saved theme immediately, bypassing cache
      lastAppliedTheme = null;
      applyTheme(theme);
    }
  }, [theme, tempTheme]);

  // Reset theme to default (for logout)
  const resetTheme = useCallback(() => {
    // Clear temporary theme
    setTempTheme(null);

    // Reset to default theme
    setTheme(DEFAULT_THEME);

    // Remove from localStorage
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // Failed to remove theme from localStorage
    }

    // Force apply default theme immediately, bypassing cache
    lastAppliedTheme = null;
    applyTheme(DEFAULT_THEME);
  }, []);

  // Check if there are unsaved changes
  const hasUnsavedChanges = tempTheme !== null;

  return {
    theme: tempTheme || theme,
    savedTheme: theme,
    isLoading,
    hasUnsavedChanges,
    updateTheme,
    toggleMode,
    setPrimaryColor,
    setTemporaryTheme,
    saveTheme,
    resetTemporaryChanges,
    resetTheme,
  };
};
