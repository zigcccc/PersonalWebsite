import styled from 'styled-components';

export const StyledProjectsGrid = styled.div`
  margin: 4rem 0 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  grid-gap: 4.75rem 1.5rem;
  grid-template-areas:
    'card1 card2'
    'card3 card3'
    'card4 card4';
  & > * {
    &:nth-child(1) {
      grid-area: card1;
    }
    &:nth-child(2) {
      grid-area: card2;
    }
    &:nth-child(3) {
      grid-area: card3;
    }
    &:nth-child(4) {
      grid-area: card4;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'card1'
      'card2'
      'card3'
      'card4';
  }
`;
