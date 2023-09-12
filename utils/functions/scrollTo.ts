import { type MutableRefObject } from 'react';

export const scrollToId = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  }
};

export const scrollPastRef = (ref: MutableRefObject<HTMLElement | null>) => {
  if (!ref?.current) {
    return;
  }

  const { height } = ref.current.getBoundingClientRect();

  window.scrollTo({ top: height, behavior: 'smooth' });
};
