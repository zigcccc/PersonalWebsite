import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
	:root {
		font-size: 16px;

		@media screen and (max-width: 768px) {
			font-size: 14px;
		}
	}
	body {
		background-color: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.fg};
		font-family: ${({ theme }) => theme.font__body};
		overflow-x: hidden;
	}

	img, svg {
		max-width: 100%;
		height: auto;
	}
`;
