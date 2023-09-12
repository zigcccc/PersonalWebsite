import React from 'react';

import { StyledHeading } from './Styles';

export type THeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  children: React.ReactChild;
  tag: THeadingTag;
}

export const Heading = ({ children, tag }: HeadingProps) => <StyledHeading as={tag}>{children}</StyledHeading>;

Heading.defaultProps = {
  tag: 'h2',
};
