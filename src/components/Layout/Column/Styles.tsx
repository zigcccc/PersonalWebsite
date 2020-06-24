import styled from 'styled-components';

export const StyledColumn = styled.div`
	&.column {
		@media screen and (max-width: 768px) {
			width: 100%;

			&--has-mobile-spacing {
				margin-bottom: 3rem;
			}
		}
	}
`;
