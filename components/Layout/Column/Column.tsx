import React from 'react';
import classNames from 'classnames';

import { StyledColumn } from './Styles';

export type TColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TColumnOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface ColumnProps {
  children: React.ReactChild | React.ReactChild[];
  size?: TColumnSize;
  offset?: TColumnOffset;
  noMobileSpacing?: boolean;
}

export const Column = ({ children, size, offset, noMobileSpacing }: ColumnProps) => (
  <StyledColumn
    className={classNames('column col-sm-12', {
      [`col-md-${size}`]: size,
      [`col-md-offset-${offset}`]: offset,
      'column--has-mobile-spacing': !noMobileSpacing,
    })}
  >
    {children}
  </StyledColumn>
);

Column.defaultProps = {
  noMobileSpacing: false,
};
