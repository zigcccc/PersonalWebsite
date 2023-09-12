import React from 'react';

import { CTA } from '@/components/Buttons';
import { Spacer } from '@/components/Layout';

import { type Project } from '@/types/project';

import { Image } from '../Image/Image';

import { StyledProjectCard } from './Styles';

export const ProjectCard = ({ company, title, subtitle, cta, artwork, dark, description, techStack }: Project) => (
  <StyledProjectCard $company={company} $dark={dark} className="project-card">
    <div className="project-card--artwork">
      <Image path={artwork} alt={title} />
    </div>
    <div className="project-card--content">
      <h4 className="project-card--subtitle">{subtitle}</h4>
      <h3 className="project-card--title">{title}</h3>
      <p className="project-card--description">{description}</p>
      <p className="project-card--tech-stack">
        <strong>Technologies used:</strong> {techStack.join(', ')}
      </p>
      <Spacer />
      <div className="project-card--cta">
        <CTA size="small" lightText={!dark} type="dimmed" href={cta.url} target="_blank">
          {cta.text}
        </CTA>
      </div>
    </div>
  </StyledProjectCard>
);
