import { type PropsWithChildren } from 'react';

import { StyledSubHeading } from './Styles';

export type SubHeadingProps = PropsWithChildren<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const SubHeading = ({ children, tag = 'h3' }: SubHeadingProps) => (
  <StyledSubHeading as={tag}>{children}</StyledSubHeading>
);
