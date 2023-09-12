import React from 'react';

import { SassLogo, ReactLogo, JavaScriptLogo } from '../../Icons';

import { StyledTechBadge, StyledTechBadgeContainer } from './Styles';

export type TechType = 'react' | 'sass' | 'javascript';

export interface TechBadgeProps {
  tech: TechType;
}

const iconMapper: Record<TechType, React.ReactElement> = {
  javascript: <JavaScriptLogo />,
  sass: <SassLogo />,
  react: <ReactLogo />,
};

export const TechBadge = ({ tech }: TechBadgeProps) => (
  <StyledTechBadgeContainer>
    <StyledTechBadge $tech={tech}>{iconMapper[tech]}</StyledTechBadge>
  </StyledTechBadgeContainer>
);
