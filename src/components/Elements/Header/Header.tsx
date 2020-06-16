import React from 'react';

import { LetterMark } from '../../Icons';
import { CTA } from '../../Buttons';
import { Switcher } from '../../Inputs';

import { ThemeOptionType } from '../../../styles/theme';

import { StyledHeader } from './Styles';

interface NavItem {
	id: string;
	label: string;
}

interface HeaderProps {
	onThemeSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	navItems: NavItem[];
	theme: ThemeOptionType;
}

export const Header = ({ onThemeSwitch, navItems, theme }: HeaderProps) => {
	const handleLinkClick = (id: string): void => {
		const section = document.getElementById(id);
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth',
			});
		}
	};
	return (
		<StyledHeader>
			<LetterMark height={35} />
			<nav className="nav">
				<Switcher onSwitch={onThemeSwitch} theme={theme} />

				{navItems.map((item) => (
					<span
						className="nav--item"
						key={item.id}
						onClick={() => handleLinkClick(item.id)}
					>
						{item.label}
					</span>
				))}

				<CTA
					type="outlined"
					size="small"
					onClick={() => handleLinkClick('contact')}
				>
					Connect with me
				</CTA>
			</nav>
		</StyledHeader>
	);
};
