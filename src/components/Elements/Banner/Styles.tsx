import styled from 'styled-components';

export const StyledBanner = styled.section`
	height: calc(100vh - 95px);
	background: linear-gradient(
		122deg,
		${({ theme }) => theme.bg} 0%,
		${({ theme }) => theme.light} 100%
	);
	padding-top: 95px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.container {
		position: relative;
		z-index: 2;
	}

	h1 {
		font-family: ${({ theme }) => theme.font__heading};
		font-size: 42px;
		line-height: 1.618;
		color: ${({ theme }) => theme.fg};
		margin-bottom: 3.125rem;

		span {
			font-weight: 700;
			position: relative;

			&::after {
				content: '';
				background-color: ${({ theme }) => theme.color__primary};
				width: 100%;
				height: 5px;
				display: block;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
	}

	.logomark {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`;
