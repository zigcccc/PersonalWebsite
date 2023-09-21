'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const NavbarSegments = () => {
  const segment = useSelectedLayoutSegment();

  if (!segment) {
    return <div />;
  }

  return (
    <div className="pl-3 font-mono font-bold">
      <Link className="text-gray dark:text-white visited:text-gray visited:dark:text-white no-underline" href="/blog">
        <span>&gt; My stories</span>
      </Link>
    </div>
  );
};
