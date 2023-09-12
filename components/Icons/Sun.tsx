import React from 'react';

export const Sun = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M8 1s0-1 1-1 1 1 1 1v1s0 1-1 1-1-1-1-1V1zm9 7s1 0 1 1-1 1-1 1h-1s-1 0-1-1 1-1 1-1h1zM2 8s1 0 1 1-1 1-1 1H1s-1 0-1-1 1-1 1-1h1zm2.56-4.354s.708.708 0 1.415c-.706.707-1.413 0-1.413 0l-.708-.707s-.707-.707 0-1.415c.708-.707 1.414 0 1.414 0l.708.708zm10.5 10.5s.707.707 0 1.414-1.414 0-1.414 0l-.707-.707s-.707-.707 0-1.413c.707-.707 1.415 0 1.415 0l.707.707zm-.206-9.085s-.707.707-1.414 0 0-1.414 0-1.414l.707-.708s.707-.707 1.414 0c.707.708 0 1.415 0 1.415l-.707.707zm-10.5 10.5s-.707.706-1.414 0c-.707-.707 0-1.415 0-1.415l.707-.707s.707-.707 1.414 0 0 1.415 0 1.415l-.707.707zM8 16s0-1 1-1 1 1 1 1v1s0 1-1 1-1-1-1-1v-1zM9 14A5 5 0 109 4a5 5 0 000 10z"
        fill="#FFAC33"
      />
    </svg>
  );
};