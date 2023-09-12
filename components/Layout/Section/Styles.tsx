import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 9rem 0;

  @media screen and (max-width: 768px) {
    padding: 7rem 1.5rem;
    overflow-x: hidden;
  }

  &.centered {
    text-align: center;
  }
`;
