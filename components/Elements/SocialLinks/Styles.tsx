import styled from 'styled-components';

import { convertHexToRGBA } from '../../../utils/helpers';

export const StyledSocialLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => convertHexToRGBA(theme.bg, 10)};
	backdrop-filter: blur(45px);

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}

	.social-link {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 4.625rem 0;
		font-size: 0.875rem;
		text-decoration: none;
		font-family: ${({ theme }) => theme.font__heading};
    color: ${({ theme }) => theme.gray__middle};
		transition: ${({ theme }) => theme.transition__default};
		
		@media screen and (max-width: 768px) {
			min-width: 50%;
			padding: 2rem 0;
			&:last-child {
				display: none;
			}
		}

		&:hover {
			color: ${({ theme }) => theme.color__primary};
      background-color: ${({ theme }) => convertHexToRGBA(theme.fg, 5)};
      
      &--icon svg path {
        fill: color: ${({ theme }) => theme.color__primary};
      }
		}

		&--icon {
			font-size: 1.5rem;
			margin-right: 1rem;
		}
	}
`;
