import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
	:root {
		font-size: 16px;
	}
	body {
		background-color: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.fg};
		font-family: ${({ theme }) => theme.font__body};
	}
`;
