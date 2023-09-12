'use client';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AppThemeContext } from '@/context/theme';

import { GlobalStyle } from '@/styles/GlobalStyles';
import { type ThemeOptionType, theme_base, theme_light, theme_dark, ThemeType } from '@/styles/theme';
import StyledComponentsRegistry from '@/styles/registry';

const themeConfigMap: Record<ThemeOptionType, ThemeType> = {
  light: { ...theme_base, ...theme_light },
  dark: { ...theme_base, ...theme_dark },
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeOptionType>('light');

  const handleThemeSwitch = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const userSetTheme = localStorage.getItem('theme') as ThemeOptionType;
    if (userSetTheme) {
      setTheme(userSetTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, []);

  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={themeConfigMap[theme]}>
        <AppThemeContext.Provider value={{ onToggleTheme: handleThemeSwitch, theme }}>
          <GlobalStyle />
          {children}
        </AppThemeContext.Provider>
      </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
};
