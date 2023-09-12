import styled from 'styled-components';
import { SpacerProps } from './Spacer';

export const StyledSpacer = styled.div<Pick<SpacerProps, 'size'>>`
  flex: 1;

  &.spacer--custom-size {
    flex: unset;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;
