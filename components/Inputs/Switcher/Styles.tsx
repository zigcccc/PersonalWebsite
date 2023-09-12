import styled from 'styled-components';

export const StyledSwitcher = styled.div`
  width: 60px;
  position: relative;
  .switcher {
    &--input {
      opacity: 0;
      position: absolute;

      & + label {
        position: relative;
        display: inline-block;
        user-select: none;
        transition: 0.4s ease;
        height: 30px;
        width: 100%;
        border: 2px solid ${({ theme }) => theme.color__white};
        border-radius: 60px;
        &:hover {
          cursor: pointer;
        }

        &:before {
          content: '';
          position: absolute;
          display: block;
          transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
          height: 30px;
          width: 100%;
          top: 0;
          left: 0;
          border-radius: 30px;
          background-color: ${({ theme }) => theme.fg};
        }

        &:after {
          content: '';
          position: absolute;
          display: block;
          box-shadow:
            0 0 0 1px hsla(0, 0%, 0%, 0.1),
            0 4px 0px 0 hsla(0, 0%, 0%, 0.04),
            0 4px 9px hsla(0, 0%, 0%, 0.13),
            0 3px 3px hsla(0, 0%, 0%, 0.05);
          transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
          background: ${({ theme }) => theme.color__white};
          height: 28px;
          width: 28px;
          top: 1px;
          left: 1px;
          border-radius: 60px;
        }
      }

      &:checked {
        & + label:before {
          background: ${({ theme }) => theme.bg};
          transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
        }
        & + label:after {
          left: calc(60px - 30px);
        }
      }
    }

    &--icon {
      position: absolute;
      top: 50%;
      right: 0.375rem;
      transform: translateY(-50%);

      &__left {
        right: unset;
        left: 0.425rem;
      }
    }
  }
`;
