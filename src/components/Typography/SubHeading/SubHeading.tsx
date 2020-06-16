import React from 'react';

import { StyledSubHeading } from './Styles';

export type TSubHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SubHeadingProps {
	children: React.ReactChild;
	tag: TSubHeadingTag;
}

export const SubHeading = ({ children, tag }: SubHeadingProps) => (
	<StyledSubHeading as={tag}>{children}</StyledSubHeading>
);

SubHeading.defaultProps = {
	tag: 'h3',
};
