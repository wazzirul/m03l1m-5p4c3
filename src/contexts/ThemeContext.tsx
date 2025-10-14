'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useTheme as useThemeHook } from '@/hooks/useTheme';
import type { ThemeConfig } from '@/hooks/useTheme';

interface ThemeContextType {
  theme: ThemeConfig;
  savedTheme: ThemeConfig;
  hasUnsavedChanges: boolean;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  setPrimaryColor: (color: string) => void;
  setTemporaryTheme: (updates: Partial<ThemeConfig>) => void;
  saveTheme: () => void;
  resetTemporaryChanges: () => void;
  resetTheme: () => void;
  toggleMode: () => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeHook = useThemeHook();

  // console.log('🎯 ThemeProvider rendering with theme:', themeHook.theme.primary);

  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
