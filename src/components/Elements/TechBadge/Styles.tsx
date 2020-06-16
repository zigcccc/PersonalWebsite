import styled from 'styled-components';
import { TechBadgeProps } from './TechBadge';

export const StyledTechBadgeContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: calc(100vw - 3rem);
	}

	&:nth-child(1) {
		justify-content: flex-start;
		margin-bottom: -6rem;
		margin-left: 5rem;

		@media screen and (max-width: 768px) {
			justify-content: center;
			margin-left: 0;
			margin-bottom: -4rem;
			transform: translateX(-15%);
		}
	}

	&:nth-child(2) {
		justify-content: flex-end;

		@media screen and (max-width: 768px) {
			justify-content: center;
			margin-left: 0;
			transform: translateX(20%);
		}
	}

	&:nth-child(3) {
		margin-top: -4rem;

		@media screen and (max-width: 768px) {
			margin-top: -2rem;
			transform: translateX(0);
			margin-bottom: 2rem;
		}
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
