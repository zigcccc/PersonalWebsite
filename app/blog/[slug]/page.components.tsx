'use client';
import QuoteIcon from '@atlaskit/icon/glyph/editor/quote';
import { PortableText } from '@portabletext/react';
import { useCallback, useEffect } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { type TypedObject } from 'sanity';

import { BlogCard } from '@/components/Elements/BlogCard';

import { useAppTheme } from '@/context/theme';

export const BlogQuote = ({ excerpt }: { excerpt: string }) => (
  <cite className="relative">
    <span className="absolute -z-10 -top-6 -left-6 [&>span>svg]:text-white/20">
      <QuoteIcon label="description" size="xlarge" />
    </span>
    <p className="leading-8">{excerpt}</p>
  </cite>
);

const getIdFromTweetUrl = (url: string) => {
  const segments = new URL(url).pathname.split('/');
  return segments.at(segments.length - 1);
};

export const TwitterEmbedPreview = ({ url }: { url: string }) => {
  const { theme } = useAppTheme();
  const id = getIdFromTweetUrl(url);

  if (!id) {
    console.error(`Unable to extract Twit ID from the provided URL (${url}).`);
    return null;
  }

  return (
    <div className="[&>div>div]:mx-auto">
      <TwitterTweetEmbed tweetId={id} options={{ theme }} />
    </div>
  );
};

export const BlogBody = ({ body }: { body: TypedObject[] }) => (
  <PortableText
    value={body}
    components={{
      types: {
        twitter: ({ value }) => <TwitterEmbedPreview url={value.url} />,
        blog: ({ value }) => <BlogCard isCondensed blogPreview={value} />,
      },
    }}
  />
);

export const BlogViewCounter = ({ blogId }: { blogId: string }) => {
  const handleUpdateViewCount = useCallback(async () => {
    try {
      await fetch(`/api/cms/blog/incrementViewCount?id=${blogId}`, { method: 'PATCH' }).then((res) => res.json());
    } catch {
      // pass
    }
  }, [blogId]);

  useEffect(() => {
    handleUpdateViewCount();
  }, [handleUpdateViewCount]);

  return null;
};
