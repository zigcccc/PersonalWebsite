import React from 'react';

import { ThemeProvider } from 'styled-components';

import { CTA } from './components/Buttons';
import { Header, Banner, TechBadge } from './components/Elements';
import { Section, Row, Column } from './components/Layout';
import { Heading, SubHeading, Paragraph } from './components/Typography';
import { ComputerThinking } from './components/Graphics';

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

const techStack = ['sass', 'react', 'javascript'];

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
			<Section>
				<SubHeading>Hello, I'm Žiga</SubHeading>
				<Heading>Who am I?</Heading>
				<Row vAlign="bottom">
					<Column size={6}>
						<Paragraph>
							Creative, open-minded and always thirsty for new knowledge.
						</Paragraph>
						<Paragraph>
							I'm a 24 years old <strong>frontend developer</strong> with a tendency
							towards web development and web design in general. I'm always eager to
							provide a smooth and pleasant user experience for the end-user of web (or
							mobile) application. My weapon of choice is <strong>JavaScript</strong>,
							more specifically <strong>React.js</strong> framework. I'm interested in
							UX and UI in terms of how we can influence the user through design and
							interactions.{' '}
						</Paragraph>
						<CTA onClick={() => null}>Let's talk</CTA>
					</Column>
					<Column size={6}>
						<ComputerThinking />
					</Column>
				</Row>
			</Section>
			<Section>
				<Row vAlign="middle">
					<Column size={5}>
						{techStack.map((tech) => (
							<TechBadge tech={tech} key={tech} />
						))}
					</Column>
					<Column size={6} offset={1}>
						<SubHeading>Frontend Javascript Developer</SubHeading>
						<Heading>What am I good at?</Heading>
						<Paragraph>
							Although my formal education background comes from the design and
							multimedia area, I excel at programing which I've been learning since the
							age of fifteen.
						</Paragraph>
						<Paragraph>
							<strong>I specialize in JavaScript</strong>, more specifically the{' '}
							<strong>React library</strong>. Using hooks, calling lifecycle methods,
							rendering high performant components, interacting with external APIs, and
							storing data in state containers are my everyday tasks. Besides React, I
							also have a deep understanding of the{' '}
							<strong>Redux state management</strong> library and{' '}
							<strong>Sass CSS preprocessor</strong>.
						</Paragraph>
						<CTA href="https://www.linkedin.com/in/zigakrasovec/" target="_blank">
							My LinkedIn profile
						</CTA>
					</Column>
				</Row>
			</Section>
		</ThemeProvider>
	);
};
