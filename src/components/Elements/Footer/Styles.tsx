import styled from 'styled-components';

export const StyledFooter = styled.footer`
	padding: 4rem 0 2rem;
	background-color: ${({ theme }) => theme.light};
	display: flex;
	flex-direction: column;
	align-items: center;

	.social-links-container {
		width: 100%;
		margin: 1rem 0;
	}

	.copyrights {
		margin-top: 2.8rem;
		padding-top: 2rem;
		position: relative;
		width: 100%;
		text-align: center;
		font-size: 0.7rem;
		font-family: ${({ theme }) => theme.font__heading};
		color: ${({ theme }) => theme.gray__middle};

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: ${({ theme }) => theme.gray__light};
			height: 1px;
		}
	}
`;
