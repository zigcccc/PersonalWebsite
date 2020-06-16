import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Header, Banner } from './components/Elements';

import { GlobalStyle } from './styles/GlobalStyles';
import {
	theme_base,
	theme_light,
	theme_dark,
	ThemeOptionType,
} from './styles/theme';

const sections = [
	{ label: 'Who?', id: 'who' },
	{ label: 'What?', id: 'what' },
	{ label: 'Done!', id: 'done' },
];

export const App = () => {
	const [theme, setTheme] = React.useState('light' as ThemeOptionType);

	const handleThemeSwitch = (event: any) => {
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const themeConfig = React.useMemo(
		() => ({
			...theme_base,
			...(theme === 'light' ? theme_light : theme_dark),
		}),
		[theme]
	);

	React.useEffect(() => {
		const userSetTheme = localStorage.getItem('theme') as ThemeOptionType;
		if (userSetTheme) {
			setTheme(userSetTheme);
		} else {
			setTheme(
				window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			);
		}
	}, []);

	return (
		<ThemeProvider theme={themeConfig}>
			<GlobalStyle theme={themeConfig} />
			<Header
				onThemeSwitch={handleThemeSwitch}
				theme={theme}
				navItems={sections}
			/>
			<Banner theme={theme} />
		</ThemeProvider>
	);
};
