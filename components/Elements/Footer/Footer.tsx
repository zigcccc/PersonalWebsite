'use client';

import { LogoLight, Logo } from '@/components/Icons';
import { SubHeading, Heading } from '@/components/Typography';

import { useAppTheme } from '@/context/theme';

import { SocialLinks } from '../SocialLinks/SocialLinks';
import { socialLinks } from '../Banner/Banner';

import { StyledFooter } from './Styles';

export const Footer = () => {
  const { theme } = useAppTheme();

  return (
    <StyledFooter>
      {theme === 'dark' ? <LogoLight /> : <Logo />}
      <div className="social-links-container">
        <SocialLinks links={socialLinks} />
      </div>
      <SubHeading>or reach me at</SubHeading>
      <Heading>zkrasovec@gmail.com</Heading>
      <div className="copyrights">
        <small>Copyright © {new Date().getFullYear()} Žiga Krašovec, all rights reserved</small>
      </div>
    </StyledFooter>
  );
};
