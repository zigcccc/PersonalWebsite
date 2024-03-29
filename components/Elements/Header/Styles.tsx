import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.55rem;

  & > svg {
    @media screen and (max-width: 768px) {
      max-width: 50%;
    }
  }

  .nav {
    margin: 0 0.625rem;
    display: flex;
    align-items: center;

    .cta {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &--item {
      font-size: 1rem;
      padding: 1em 1.56em;
      font-weight: 700;
      font-family: ${({ theme }) => theme.font__heading};
      transition: ${({ theme }) => theme.transition__default};

      @media screen and (max-width: 768px) {
        display: none;
      }

      &:last-of-type {
        margin-right: 1.56em;
      }

      &:first-of-type {
        margin-left: 1.56em;
      }

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color__primary};
      }
    }
  }
`;
