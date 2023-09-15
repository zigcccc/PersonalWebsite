import React, { ElementType, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import { StyledCTA } from './Styles';

export type CTAProps = PropsWithChildren<{
  as?: ElementType;
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
export const CTA = forwardRef<HTMLAnchorElement, CTAProps>(
  ({ children, size = 'medium', type = 'primary', lightText, ...props }, ref) => (
    <StyledCTA ref={ref} className="cta" $size={size} type={type} $lightText={lightText} {...props}>
      {children}
    </StyledCTA>
  )
);

CTA.displayName = 'CTA';
