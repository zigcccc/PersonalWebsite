'use client';
import React from 'react';
import classNames from 'classnames';

import { Moon, Sun } from '@/components/Icons';

import { useAppTheme } from '@/context/theme';

import { StyledSwitcher } from './Styles';

export const Switcher = () => {
  const { theme, onToggleTheme } = useAppTheme();

  return (
    <StyledSwitcher className="switcher">
      <input
        onChange={onToggleTheme}
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
