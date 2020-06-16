import React from 'react';

import classNames from 'classnames';

import { Sun, Moon } from '../../Icons';

import { ThemeOptionType } from '../../../styles/theme';

import { StyledSwitcher } from './Styles';

export interface SwitcherProps {
	onSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	theme: ThemeOptionType;
}

export const Switcher = ({ onSwitch, theme }: SwitcherProps) => {
	return (
		<StyledSwitcher className="switcher">
			<input
				onChange={onSwitch}
				type="checkbox"
				name="toggle"
				className="switcher--input"
				id="toggle"
				checked={theme === 'dark'}
			/>
			<label htmlFor="toggle"></label>
			<div
				className={classNames('switcher--icon', {
					'switcher--icon__left': theme === 'dark',
				})}
			>
				{theme === 'dark' ? <Moon /> : <Sun />}
			</div>
		</StyledSwitcher>
	);
};
