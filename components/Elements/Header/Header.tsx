'use client';
import { CTA } from '@/components/Buttons';
import { LetterMark } from '@/components/Icons';
import { Switcher } from '@/components/Inputs';

import { scrollToId } from '@/utils/functions';

import { StyledHeader } from './Styles';

type HeaderProps = {
  navItems: { id: string; label: string }[];
};

export const Header = ({ navItems }: HeaderProps) => (
  <StyledHeader>
    <LetterMark height={35} />
    <nav className="nav">
      <Switcher />

      {navItems.map((item) => (
        <span className="nav--item" key={item.id} onClick={() => scrollToId(item.id)}>
          {item.label}
        </span>
      ))}

      <CTA type="outlined" size="small" onClick={() => scrollToId('contact')}>
        Connect with me
      </CTA>
    </nav>
  </StyledHeader>
);
