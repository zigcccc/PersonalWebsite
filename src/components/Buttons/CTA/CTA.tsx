import React from 'react';

import { StyledCTA } from './Styles';

export interface CTAProps {
	onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	children: React.ReactChild;
	type: 'primary' | 'outlined' | 'dimmed';
	presentation: 'primary' | 'light' | 'dark';
	size: 'small' | 'medium' | 'large';
}

/**
 * Call to Action button
 */
export const CTA = ({ children, ...props }: CTAProps) => (
	<StyledCTA className="cta" {...props}>
		{children}
	</StyledCTA>
);

CTA.defaultProps = {
	type: 'primary',
	presentation: 'primary',
	size: 'medium',
};
