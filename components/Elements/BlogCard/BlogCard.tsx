'use client';
import WatchFilledIcon from '@atlaskit/icon/glyph/watch-filled';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/sanity/lib/image';

import { type BlogCardProps } from './BlogCard.types';
import dayjs from 'dayjs';

export const BlogCard = ({ blogPreview, isCondensed = false }: BlogCardProps) => {
  const categoryImage = urlForImage(blogPreview.category.icon).size(24, 24).fit('max').url();
  const publishedAt = dayjs(blogPreview._createdAt).format('MMM D, YYYY');

  return (
    <div className="rounded flex flex-col text-left shadow-lg shadow-dark/10 py-8 px-6 bg-white dark:bg-gray border border-solid border-l-2 border-l-primary dark:border-l-primary border-gray-5 dark:border-dark">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={categoryImage} width={24} height={24} alt={blogPreview.category.name} />
          <span className="text-primary font-mono">{blogPreview.category.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <WatchFilledIcon size="medium" label="view count" />
          <span className="font-mono text-sm font-bold">{blogPreview.viewCount ?? 0}</span>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-mono font-bold text-2xl mt-0 mb-2">{blogPreview.title}</h3>
        <p className="text-gray-2 dark:text-gray-5 leading-6 text-base">{blogPreview.excerpt}</p>
      </div>
      <div className="flex-1" />
      {!isCondensed && (
        <div className="mt-6 flex flex-col gap-2">
          <span className="text-xs text-gray-2 dark:text-gray-5">
            Reading time: <strong className="font-bold">{blogPreview.estimatedReadingTime ?? 1}min</strong>
          </span>
          <span className="text-xs text-gray-2 dark:text-gray-5">
            Published: <strong className="font-bold">{publishedAt}</strong>
          </span>
        </div>
      )}
      <div className="flex justify-end mt-8">
        <Link
          className="font-mono font-bold text-sm no-underline text-dark dark:text-white px-4 py-2 bg-dark/10 dark:bg-white/10 rounded"
          href={`/blog/${blogPreview.slug}/`}
        >
          Read the story
        </Link>
      </div>
    </div>
  );
};
