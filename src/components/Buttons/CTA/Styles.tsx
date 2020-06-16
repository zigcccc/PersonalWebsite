import styled, { css } from 'styled-components';
import { CTAProps } from './CTA';

const lightCtaCss = css`
	background: none;
	background-color: transparent;
	box-shadow: none;
	border: 3px solid ${({ theme }) => theme.fg};
	color: ${({ theme }) => theme.fg};

	&:hover {
		background-color: ${({ theme }) => theme.fg};
		color: ${({ theme }) => theme.bg};
	}
`;

const sizeMapper = {
	small: '1rem',
	medium: '1.25rem',
	large: '1.5rem',
};

export const StyledCTA = styled.a`
	display: inline-flex;
	flex-direction: row;
	padding: 1em 2em;
	background: linear-gradient(90deg, #ecb22f 0%, #ce982c 100%);
	box-shadow: 0px 18px 36px -10px rgba(0, 0, 0, 0.12);
	border-radius: 0.2em;
	font-family: Fira Code;
	font-weight: bold;
	font-size: ${({ size }: CTAProps) => sizeMapper[size]};
	color: ${({ theme }) => theme.color__gray};
	transition: 450ms ease-in-out all;

	${({ type }) => type === 'outlined' && lightCtaCss};

	&:hover {
		cursor: pointer;
		filter: brightness(1.15);
	}
`;
