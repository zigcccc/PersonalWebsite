import React, { PropsWithChildren } from 'react';

import { StyledCTA } from './Styles';

export type CTAProps = PropsWithChildren<{
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  type?: 'primary' | 'outlined' | 'dimmed';
  size?: 'small' | 'medium' | 'large';
  target?: '_blank' | '_self';
  lightText?: boolean;
}>;

/**
 * Call to Action button
 */
export const CTA = ({ children, size = 'medium', type = 'primary', lightText, ...props }: CTAProps) => (
  <StyledCTA className="cta" $size={size} type={type} $lightText={lightText} {...props}>
    {children}
  </StyledCTA>
);
