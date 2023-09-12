'use client';
import { useContext } from 'react';

import { AppThemeContext } from './theme.context';

export const useAppTheme = () => {
  const theme = useContext(AppThemeContext);

  if (!theme) {
    throw new Error('useAppTheme must be rendered under the AppThemeContext.Provider');
  }

  return theme;
};
