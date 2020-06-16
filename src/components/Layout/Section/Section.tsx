import React from 'react';

import classNames from 'classnames';

import { StyledSection } from './Styles';

export interface SectionProps {
	children: any;
	centered?: Boolean;
}

export const Section = ({ children, centered }: SectionProps) => (
	<StyledSection className={classNames('section', { centered })}>
		<div className="container">{children}</div>
	</StyledSection>
);
