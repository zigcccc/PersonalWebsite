import styled from 'styled-components';

export const StyledSubHeading = styled.h3`
  font-family: ${({ theme }) => theme.font__heading};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.2;
  margin-bottom: 0.625em;
  color: ${({ theme }) => theme.gray__4};
`;
