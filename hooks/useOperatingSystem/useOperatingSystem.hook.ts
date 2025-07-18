'use client';
import { useState } from 'react';

export const useOperatingSystem = () => {
  const [os] = useState<'windows' | 'mac' | 'linux'>(() => {
    const { platform } = window.navigator;

    if (platform.startsWith('Mac')) {
      return 'mac';
    } else if (platform.startsWith('Win')) {
      return 'windows';
    } else {
      return 'linux';
    }
  });

  return os;
};
