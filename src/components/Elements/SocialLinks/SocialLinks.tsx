import React from 'react';

import { Facebook, Instagram, GitHub, LinkedIn, Twitter } from '../../Icons';

import { StyledSocialLinks } from './Styles';

type tSocialIconMapper = {
	[key: string]: React.ReactElement;
};

interface SocialLink {
	id: keyof typeof iconMapper;
	label: string;
	url: string;
}
export interface SocialLinksProps {
	links: SocialLink[];
}

const iconMapper: tSocialIconMapper = {
	facebook: <Facebook />,
	instagram: <Instagram />,
	twitter: <Twitter />,
	github: <GitHub />,
	linkedin: <LinkedIn />,
};

export const SocialLinks = ({ links }: SocialLinksProps) => (
	<StyledSocialLinks>
		{links.map((link) => (
			<a
				href={link.url}
				title={link.label}
				rel="noopener noreferrer"
				key={link.id}
				className="social-link"
			>
				<span className="social-link--icon">{iconMapper[link.id]}</span>
				{link.label}
			</a>
		))}
	</StyledSocialLinks>
);
