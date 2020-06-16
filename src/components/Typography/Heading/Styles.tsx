import styled from 'styled-components';

export const StyledHeading = styled.h2`
	font-family: ${({ theme }) => theme.font__heading};
	font-weight: bold;
	font-size: 2.375rem;
	line-height: 1.2;
	margin-bottom: 0.92em;
	color: ${({ theme }) => theme.fg};

	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;
