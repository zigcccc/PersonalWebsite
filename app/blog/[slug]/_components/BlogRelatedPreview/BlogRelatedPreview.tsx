import { ArrowLeftIcon, ArrowRightIcon } from '@sanity/icons';
import clsx from 'clsx';
import Link from 'next/link';

import { type BlogRelatedPreviewProps } from './BlogRelatedPreview.types';

export const BlogRelatedPreview = ({ blogPreview, direction }: BlogRelatedPreviewProps) => {
  const isNext = direction === 'next';

  const icon = isNext ? <ArrowLeftIcon fontSize={18} /> : <ArrowRightIcon fontSize={18} />;
  const alignClassName = isNext ? 'items-start' : 'items-end';
  const getLinkLabel = () => {
    if (!blogPreview) {
      return isNext ? 'No next story' : 'No previous story';
    }

    return isNext ? <>{icon} Next story</> : <>Previous story {icon}</>;
  };
  const href = blogPreview ? `/blog/${blogPreview.slug}` : '/blog';

  return (
    <Link
      className={clsx(
        'flex flex-col p-8 no-underline hover:bg-dark/5 hover:dark:bg-white/10 transition-all',
        alignClassName
      )}
      href={href}
    >
      <span className="text-xs text-dark dark:text-white flex items-center gap-2">{getLinkLabel()}</span>
      <span className="text-lg font-mono font-bold text-dark dark:text-white truncate">
        {blogPreview?.title || 'Back to all stories'}
      </span>
    </Link>
  );
};
