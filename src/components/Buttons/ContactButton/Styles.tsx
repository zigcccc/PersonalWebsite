import styled from 'styled-components';
import { convertHexToRGBA } from '../../../helpers';

export const StyledContactButton = styled.a`
	display: flex;
	align-items: center;
	background: ${({ theme }) => convertHexToRGBA(theme.light, 50)};
	color: ${({ theme }) => theme.gray__middle};
	border-radius: 10px;
	text-decoration: none;
	padding: 1.5rem;
	margin-bottom: 1rem;
	font-family: ${({ theme }) => theme.font__heading};

	&:hover {
		color: ${({ theme }) => theme.fg};
	}

	.icon {
		margin-right: 1.5rem;
		font-size: 2rem;
	}
`;
