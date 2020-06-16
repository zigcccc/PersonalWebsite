import styled from 'styled-components';
import { TechBadgeProps } from './TechBadge';

export const StyledTechBadgeContainer = styled.div`
	display: flex;
	justify-content: center;

	&:nth-child(1) {
		justify-content: flex-start;
		margin-bottom: -6rem;
		margin-left: 5rem;
	}

	&:nth-child(2) {
		justify-content: flex-end;
	}

	&:nth-child(3) {
		margin-top: -4rem;
	}
`;

export const StyledTechBadge = styled.div<Pick<TechBadgeProps, 'tech'>>`
	background: ${({ tech, theme }) => theme[`color__${tech}`]};
	box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.12);
	border-radius: 33px;
	font-size: 10rem;
	display: inline-flex;
	padding: 2.125rem;
`;
