import React from 'react';

import { StyledSection } from './Styles';

export interface SectionProps {
	children: React.ReactChild | React.ReactChild[];
}

export const Section = ({ children }: SectionProps) => (
	<StyledSection className="section">
		<div className="container">{children}</div>
	</StyledSection>
);
