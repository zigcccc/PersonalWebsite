import React from 'react';

import { SassLogo, ReactLogo, JavaScriptLogo } from '../../Icons';

import { StyledTechBadge, StyledTechBadgeContainer } from './Styles';

export type TTechType = 'react' | 'sass' | 'javascript';
export type TTechBadgeIconMapper = {
	[key: string]: React.ReactElement;
};

export interface TechBadgeProps {
	tech: keyof typeof iconMapper;
}

const iconMapper: TTechBadgeIconMapper = {
	javascript: <JavaScriptLogo />,
	sass: <SassLogo />,
	react: <ReactLogo />,
};

export const TechBadge = ({ tech }: TechBadgeProps) => (
	<StyledTechBadgeContainer>
		<StyledTechBadge tech={tech}>{iconMapper[tech]}</StyledTechBadge>
	</StyledTechBadgeContainer>
);
