import React from 'react';

import classNames from 'classnames';

import { StyledSection } from './Styles';

export interface SectionProps {
	children: any;
	centered?: Boolean;
	id?: string;
}

export const Section = ({ children, centered, id }: SectionProps) => (
	<StyledSection id={id || ''} className={classNames('section', { centered })}>
		<div className="container">{children}</div>
	</StyledSection>
);
