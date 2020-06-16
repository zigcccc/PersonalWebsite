import React from 'react';
import classNames from 'classnames';

export type TColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TColumnOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface ColumnProps {
	children: React.ReactChild | React.ReactChild[];
	size?: TColumnSize;
	offset?: TColumnOffset;
}

export const Column = ({ children, size, offset }: ColumnProps) => (
	<div
		className={classNames('column col-sm-12', {
			[`col-md-${size}`]: size,
			[`col-md-offset-${offset}`]: offset,
		})}
	>
		{children}
	</div>
);
