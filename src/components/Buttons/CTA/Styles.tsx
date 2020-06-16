import styled, { css } from 'styled-components';
import { convertHexToRGBA } from '../../../helpers';
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

const dimmedCtaCss = css<Pick<CTAProps, 'lightText'>>`
	background: none;
	background-color: ${({ lightText, theme }) =>
		convertHexToRGBA(lightText ? theme.color__white : theme.color__gray, 15)};
	box-shadow: none;
	color: ${({ lightText, theme }) =>
		lightText ? theme.color__white : theme.color__gray};

	&:hover {
		cursor: pointer;
		filter: brightness(1.15);
	}
`;

const sizeMapper = {
	small: '1rem',
	medium: '1.25rem',
	large: '1.5rem',
};

export const StyledCTA = styled.a<Pick<CTAProps, 'size' | 'lightText'>>`
	display: inline-flex;
	flex-direction: row;
	padding: 1em 2em;
	background: linear-gradient(90deg, #ecb22f 0%, #ce982c 100%);
	box-shadow: 0px 18px 36px -10px rgba(0, 0, 0, 0.12);
	border-radius: 0.2em;
	font-family: ${({ theme }) => theme.font__heading};
	font-weight: bold;
	font-size: ${({ size }) => sizeMapper[size]};
	color: ${({ theme }) => theme.color__gray};
	transition: 450ms ease-in-out all;
	text-decoration: none;
	appereance: none;

	${({ type }) => type === 'outlined' && lightCtaCss};

	${({ type }) => type === 'dimmed' && dimmedCtaCss};

	&:hover {
		cursor: pointer;
		filter: brightness(1.15);
	}
`;
