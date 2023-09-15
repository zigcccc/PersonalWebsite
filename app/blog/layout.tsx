import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import { Footer } from '@/components/Elements/Footer';
import { LetterMark } from '@/components/Icons/LetterMark';
import { Switcher } from '@/components/Inputs/Switcher/Switcher';

const BlogLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className="flex justify-between p-5">
        <Link href="/">
          <LetterMark height={35} />
        </Link>
        <nav className="nav">
          <Switcher />
        </nav>
      </header>
      <div className="px-4 md:px-0 pb-12">{children}</div>
      <Footer />
    </>
  );
};

export default BlogLayout;
