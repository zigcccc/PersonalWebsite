'use client';
import { createContext } from 'react';

import { type ThemeOptionType } from '@/styles/theme';

type AppThemeContextOptions = {
  theme: ThemeOptionType;
  onToggleTheme: () => void;
};

export const AppThemeContext = createContext<AppThemeContextOptions | null>(null);
