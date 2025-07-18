'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { LetterMark } from '@/components/Icons';
import { Switcher } from '@/components/Inputs';
import { Footer } from '@/components/Elements';

export default function AppsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex justify-between p-5">
        <Link href="/">
          <LetterMark height={35} />
        </Link>
        <nav className="nav flex-1 justify-end md:justify-between flex items-center">
          <span className="hidden md:block" />
          <Switcher />
        </nav>
      </header>
      <div className="px-5 md:px-0 pb-12">{children}</div>
      <Footer />
    </>
  );
}
