import styled from 'styled-components';

export const StyledProjectCard = styled.article<{ $company: string; $dark: boolean }>`
  padding: 2.5rem 1.875rem 2.5rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 1.875rem;
  background-color: ${({ $company, theme }) => theme[`color__${$company}`]};
  border-radius: 10px;
  color: ${({ $dark, theme }) => ($dark ? theme.color__gray : theme.color__white)};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:hover {
    .project-card--artwork {
      transform: translateY(0) scale(1.01);
    }
  }

  .project-card--artwork {
    margin-top: -6.5rem;
    transform: translateY(2rem);
    transition: ${({ theme }) => theme.transition__default};

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .project-card--content {
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .project-card--title {
    font-family: ${({ theme }) => theme.font__heading};
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.2;
    color: ${({ $dark, theme }) => ($dark ? theme.color__gray : theme.color__white)};
    margin-bottom: 1.25rem;
  }

  .project-card--subtitle {
    font-family: ${({ theme }) => theme.font__heading};
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.2;
    color: ${({ $dark, theme }) => ($dark ? theme.color__gray : theme.color__white)};
    opacity: 0.7;
    margin-bottom: 0.3125rem;
  }

  .project-card--description,
  .project-card--tech-stack {
    font-family: ${({ theme }) => theme.font__body};
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 0.75rem;
    color: ${({ $dark, theme }) => ($dark ? theme.color__gray : theme.color__white)};

    strong {
      font-weight: bold;
    }
  }

  .project-card--cta {
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;
