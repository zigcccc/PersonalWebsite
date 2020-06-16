export const theme_base = Object.freeze({
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
	font__heading: '"Fira Mono", monospace',
	font__body: '"Noto Sans", sans-serif',
	transition__default: '450ms ease-in-out all',
});

export type ThemeOptionType = 'light' | 'dark';

export const theme_light = Object.freeze({
	fg: theme_base.color__gray,
	bg: theme_base.color__white,
	light: theme_base.gray__6,
	gray__middle: theme_base.gray__3,
});

export const theme_dark = Object.freeze({
	fg: theme_base.color__white,
	bg: theme_base.color__gray,
	light: `${theme_base.color__dark}42`,
	gray__middle: theme_base.gray__4,
});

const ThemeType = { ...theme_base, ...theme_light };

export type ThemeType = typeof ThemeType;
