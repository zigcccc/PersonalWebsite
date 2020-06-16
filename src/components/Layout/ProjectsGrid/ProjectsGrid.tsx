import React from 'react';
import { StyledProjectsGrid } from './Styles';

export interface ProjectsGridProps {
	children: React.ReactChild | React.ReactChild[];
}

export const ProjectsGrid = ({ children }: ProjectsGridProps) => (
	<StyledProjectsGrid>{children}</StyledProjectsGrid>
);
