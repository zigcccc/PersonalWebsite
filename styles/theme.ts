export const theme_base = {
  gray__1: '#333333',
  gray__2: '#4F4F4F',
  gray__3: '#828282',
  gray__4: '#BDBDBD',
  gray__5: '#E0E0E0',
  gray__6: '#F2F2F2',
  color__primary: '#ECB22F',
  color__accent: '#1EA996',
  color__dark: '#14171A',
  color__gray: '#292F37',
  color__white: '#FFFFFF',
  color__sass: '#CD6799',
  color__javascript: '#F7DF1E',
  color__react: '#21232A',
  color__tourdash: '#367AF0',
  color__ofadmin: '#FBF9F4',
  color__promotiva: '#00AEEF',
  color__ofmobile: '#68985c',
  font__heading: '"Fira Mono", monospace',
  font__body: '"Noto Sans", sans-serif',
  transition__default: '450ms ease-in-out all',
};

export type ThemeOptionType = 'light' | 'dark';

export const theme_light = {
  fg: theme_base.color__gray,
  bg: theme_base.color__white,
  light: theme_base.gray__6,
  gray__middle: theme_base.gray__3,
  gray__light: theme_base.gray__4,
};

export const theme_dark = {
  fg: theme_base.color__white,
  bg: theme_base.color__gray,
  light: `${theme_base.color__dark}42`,
  gray__middle: theme_base.gray__4,
  gray__light: theme_base.gray__3,
};

export type ThemeType = typeof theme_base & typeof theme_light;
