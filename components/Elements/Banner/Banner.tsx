'use client';
import { type MouseEvent, useRef } from 'react';

import { CTA } from '@/components/Buttons';
import { LogoMark } from '@/components/Icons';

import { type ThemeOptionType } from '@/styles/theme';

import { scrollPastRef } from '@/utils/functions';

import { SocialLinks } from '../SocialLinks/SocialLinks';

import { StyledBanner } from './Styles';

export interface BannerProps {
  theme: ThemeOptionType;
}

export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/zkrasovec',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/ziga.krasovec/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zigakrasovec/',
  },
  { id: 'github', label: 'GitHub', url: 'https://github.com/zigcccc/' },
  { id: 'twitter', label: 'Twitter', url: 'https://twitter.com/ZigaKrasovec' },
];

export const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);

  const handleCTAClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollPastRef(bannerRef);
  };

  return (
    <StyledBanner ref={bannerRef}>
      <div className="container">
        <h1>
          I write <span>efficient code</span>
          <br />
          that creates awesome <span>user experience</span>.
        </h1>
        <CTA size="large" onClick={handleCTAClick}>
          Learn how
        </CTA>
      </div>
      <div className="social-links-container">
        <SocialLinks links={socialLinks} />
      </div>
      <LogoMark />
    </StyledBanner>
  );
};
