'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigation as useNavigationHook, NavigationLayout } from '@/hooks/useNavigation';
import type { NavigationConfig } from '@/hooks/useNavigation';

interface NavigationContextType {
  navigation: NavigationConfig;
  savedNavigation: NavigationConfig;
  hasUnsavedChanges: boolean;
  updateNavigation: (updates: Partial<NavigationConfig>) => void;
  setLayout: (layout: NavigationLayout) => void;
  setTemporaryNavigation: (updates: Partial<NavigationConfig>) => void;
  saveNavigation: () => void;
  resetTemporaryChanges: () => void;
  resetNavigation: () => void;
  isLoading: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const navigationHook = useNavigationHook();

  console.log('NavigationProvider rendering with layout:', navigationHook.navigation.layout);

  return (
    <NavigationContext.Provider value={navigationHook}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
