import React from 'react';

import { ThemeProvider } from 'styled-components';

import { CTA, ContactButton } from './components/Buttons';
import { Header, Banner, TechBadge } from './components/Elements';
import { Section, Row, Column, ProjectsGrid } from './components/Layout';
import { Heading, SubHeading, Paragraph } from './components/Typography';
import { ComputerThinking } from './components/Graphics';

import { GlobalStyle } from './styles/GlobalStyles';
import {
	theme_base,
	theme_light,
	theme_dark,
	ThemeOptionType,
} from './styles/theme';
import { ProjectCard } from './components/Elements/ProjectCard/ProjectCard';

const sections = [
	{ label: 'Who?', id: 'who' },
	{ label: 'What?', id: 'what' },
	{ label: 'Done!', id: 'done' },
];

const techStack = ['sass', 'react', 'javascript'];

const projects = [
	{
		company: 'ofmobile',
		title: 'Optifarm Smart',
		subtitle: 'Mobile app - React Native',
		description:
			'Online marketplace for food providers and consumers. I am the lead frontend developer for the project.',
		techStack: ['React Native', 'Redux', 'Styled Components', 'React Navigation'],
		dark: false,
		artwork: '/images/optifarm_smart_mockup.png',
		cta: {
			url: 'https://www.optifarm.net/',
			text: 'Download the app',
		},
	},
	{
		company: 'tourdash',
		title: 'Tourdash CMS',
		subtitle: 'Fullstack app - React + Laravel',
		description:
			'My diploma thesis project. Fullstack application designed to made managing website with accommodations easy.',
		techStack: ['React', 'Redux', 'Styled Components', 'React Router', 'Laravel'],
		dark: false,
		artwork: '/images/tourdash.png',
		cta: {
			url: 'https://github.com/zigcccc/TourDash',
			text: 'View on GitHub',
		},
	},
	{
		company: 'ofadmin',
		title: 'Optifarm Smart - Admin Dashboard',
		subtitle: 'Web app - React',
		description:
			'Online marketplace for food providers and consumers. I am the lead frontend developer for the project.',
		techStack: ['React', 'Redux', 'Styled Components', 'React Router'],
		dark: true,
		artwork: '/images/of-dash.png',
		cta: {
			url: 'https://www.optifarm.net/',
			text: 'Visit the website',
		},
	},
	{
		company: 'promotiva',
		title: 'Promotiva',
		subtitle: 'Website - Wordpress',
		description:
			'Custom Wordpress theme development. I designed and than developed a highly personalized Wordpress theme, which not only looks great but is performant as well',
		techStack: ['Wordpress', 'PHP', 'Sass', 'Webpack'],
		dark: false,
		artwork: '/images/promotiva-mockup.png',
		cta: {
			url: 'https://promotiva.si',
			text: 'Visit the website',
		},
	},
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
							multimedia area, <strong>I excel at programing</strong> which I've been
							learning since the age of fifteen.
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
			<Section centered>
				<SubHeading>Some of my work</SubHeading>
				<Heading>What have I done so far?</Heading>
				<ProjectsGrid>
					{projects.map((project) => (
						<ProjectCard {...project} key={project.company} />
					))}
				</ProjectsGrid>
				<CTA href="https://github.com/zigcccc/" target="_blank">
					My GitHub profile
				</CTA>
			</Section>
			<Section>
				<SubHeading>Contact forms are boring</SubHeading>
				<Heading>Connect with me</Heading>
				<Row vAlign="top">
					<Column size={6}>
						<Paragraph>
							I always like a good debate (as long as it's not about the politics ‍🤷‍♂️).
							Whether it's about a new uprising technology, a new idea that's tinkering
							your mind or about something as common as where to hike on a sunny
							weekend, I'm up for it. <strong>I like to share my knowledge</strong>; I
							know I've learned the most from asking questings and listening to the
							experts of this field, so if I can give some of this knowledge back, I am
							more than happy to do so.
						</Paragraph>
						<Paragraph>
							So, if you think we might have a few words to exchange,{' '}
							<strong>connect with me</strong> via one of the channels and I'm sure
							we'll find a common language.
						</Paragraph>
					</Column>
					<Column size={5} offset={1}>
						<ContactButton
							icon="email"
							href="mailto:zkrasovec@gmail.com"
							text="Write me en e-mail"
						/>
						<ContactButton
							icon="facebook"
							href="https://www.facebook.com/zkrasovec"
							text="Find me on Facebook"
						/>
						<ContactButton
							icon="linkedin"
							href="https://www.linkedin.com/in/zigakrasovec/"
							text="Connect with me on LinkedIn"
						/>
					</Column>
				</Row>
			</Section>
		</ThemeProvider>
	);
};
