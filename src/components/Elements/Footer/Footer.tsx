import React from 'react';

import { Logo, LogoLight } from '../../Icons';
import { Heading, SubHeading } from '../../Typography';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { socialLinks } from '../Banner/Banner';

import { StyledFooter } from './Styles';

import { ThemeOptionType } from '../../../styles/theme';

export interface FooterProps {
	theme: ThemeOptionType;
}

export const Footer = ({ theme }: FooterProps) => (
	<StyledFooter>
		{theme === 'dark' ? <LogoLight /> : <Logo />}
		<div className="social-links-container">
			<SocialLinks links={socialLinks} />
		</div>
		<SubHeading>or reach me at</SubHeading>
		<Heading>zkrasovec@gmail.com</Heading>
		<div className="copyrights">
			<small>
				Copyright © {new Date().getFullYear()} Žiga Krašovec, all rights reserved
			</small>
		</div>
	</StyledFooter>
);
