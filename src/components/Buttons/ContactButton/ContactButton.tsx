import React from 'react';

import { Email, Facebook, LinkedIn } from '../../Icons';

import { StyledContactButton } from './Styles';

type tContactButtonIconMapper = {
	[key: string]: React.ReactElement;
};

export interface ContactButtonProps {
	icon: keyof typeof iconMapper;
	href: string;
	text: string;
}

const iconMapper: tContactButtonIconMapper = {
	facebook: <Facebook />,
	email: <Email />,
	linkedin: <LinkedIn />,
};

export const ContactButton = ({ icon, href, text }: ContactButtonProps) => (
	<StyledContactButton href={href} target="_blank" rel="noopener nofollow">
		<span className="icon">{iconMapper[icon]}</span>
		{text}
	</StyledContactButton>
);
