import { type PropsWithChildren } from 'react';

import { StyledHeading } from './Styles';

export type HeadingProps = PropsWithChildren<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const Heading = ({ children, tag = 'h2' }: HeadingProps) => <StyledHeading as={tag}>{children}</StyledHeading>;
