import React from 'react';
import classNames from 'classnames';

import { StyledSpacer } from './Styles';

export interface SpacerProps {
	size?: number | string;
}

export const Spacer = ({ size: sizeProp }: SpacerProps) => {
	const size: string = React.useMemo(() => {
		if (!sizeProp) {
			return '';
		}
		if (typeof sizeProp === 'number') {
			return `${size}px`;
		}
		return sizeProp;
	}, [sizeProp]);

	return (
		<StyledSpacer
			size={size}
			className={classNames('spacer', { 'spacer--custom-size': sizeProp })}
		/>
	);
};
