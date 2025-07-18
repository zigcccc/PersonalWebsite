import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TRowHorizontalProperties = 'start' | 'end' | 'center';
export type TRowVerticalProperties = 'top' | 'bottom' | 'middle';

export type RowProps = PropsWithChildren<{
  hAlign?: TRowHorizontalProperties;
  vAlign?: TRowVerticalProperties;
  reverse?: Boolean;
}>;

export const Row = ({ children, hAlign, vAlign, reverse }: RowProps) => (
  <div
    className={classNames('row', {
      [`${hAlign}-xs`]: hAlign,
      [`${vAlign}-xs`]: vAlign,
      reverse: reverse,
    })}
  >
    {children}
  </div>
);
