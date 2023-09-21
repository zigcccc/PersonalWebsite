import Skeleton from '@atlaskit/skeleton';
import OpenIcon from '@atlaskit/icon/glyph/open';
import { PortableText, type PortableTextComponentProps, toPlainText } from '@portabletext/react';
import { LinkIcon } from '@sanity/icons';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { type PortableTextBlock } from 'sanity';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import { BlogCard } from '@/components/Elements/BlogCard';

import { useAppTheme } from '@/context/theme';

import { client } from '@/sanity/lib/client';

import { type ImageWithBlurHash } from '@/types/image';
import { type WebsiteMetadata } from '@/types/metadata';

import { type BlogBodyProps } from './BlogBody.types';
import { getIdFromTweetUrl } from './BlogBody.helpers';
import slugify from 'slugify';

const TwitterEmbedPreview = ({ url }: { url: string }) => {
  const { theme } = useAppTheme();
  const id = getIdFromTweetUrl(url);

  if (!id) {
    console.error(`Unable to extract Twit ID from the provided URL (${url}).`);
    return null;
  }

  return (
    <div className="[&>div>div]:mx-auto">
      <TwitterTweetEmbed
        placeholder={<Skeleton width="100%" height={417} borderRadius={3} />}
        key={theme}
        tweetId={id}
        options={{ theme }}
      />
    </div>
  );
};

const InlineImage = ({ image, alt }: { image: ImageWithBlurHash; alt: string }) => {
  const imageProps = useNextSanityImage(client, image);

  if (!imageProps) {
    return null;
  }

  return (
    <div className="">
      <Image {...imageProps} alt={alt} placeholder="blur" blurDataURL={image.asset.metadata.blurHash} />
    </div>
  );
};

const ExternalLink = ({ children, href }: PropsWithChildren<{ href: string }>) => (
  <a
    className="text-gray dark:text-white font-bold visited:text-gray visited:dark:text-white [&>span]:text-gray [&>span]:dark:text-white [&>span]:underline"
    href={href}
    target="_blank"
  >
    {children}
    <OpenIcon size="small" label={`External link: ${children}`} />
  </a>
);

const LinkPreview = ({ url }: { url: string }) => {
  const { data, isLoading } = useQuery<WebsiteMetadata>({
    queryFn: () => fetch(`/api/tools/site-metadata?url=${url}`).then((res) => res.json()),
    queryKey: ['LinkPreview', url],
    enabled: !!url,
  });

  if (!data || isLoading) {
    return <Skeleton width="100%" borderRadius={6} height={340} />;
  }

  const image = data.image || `https://placehold.co/672x300?text=${data.title}`;

  return (
    <Link
      className="no-underline block rounded overflow-hidden border border-solid border-gray-4 dark:border-gray-3 my-6"
      href={url}
      target="_blank"
    >
      <div className="relative h-[175px] md:h-[300px]">
        <Image layout="fill" objectFit="cover" src={image} alt={data.title ?? data.url} />
      </div>
      <div className="flex flex-col p-3 pb-4">
        <span className="font-bold text-gray dark:text-white no-underline truncate">
          {data.title ?? 'No title provided'}
        </span>
        <span className="text-xs text-gray dark:text-white no-underline">{data.url}</span>
      </div>
    </Link>
  );
};

const LinkableH2 = ({ children, text }: PropsWithChildren<{ text: string }>) => {
  const slug = slugify(text);
  return (
    <h2 id={slug} className="font-mono font-bold text-xl mb-4 mt-8 relative group">
      <a
        className="text-white mr-1 absolute -left-7 top-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
        href={`#${slug}`}
      >
        <LinkIcon fontSize={24} />
      </a>
      {children}
    </h2>
  );
};

const LinkableH3 = ({ children, text }: PropsWithChildren<{ text: string }>) => {
  const slug = slugify(text);
  return (
    <h3 id={slug} className="font-mono font-bold text-lg mb-4 mt-6 relative group">
      <a
        className="text-white mr-1 absolute -left-7 top-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
        href={`#${slug}`}
      >
        <LinkIcon fontSize={24} />
      </a>
      {children}
    </h3>
  );
};

export const BlogBody = ({ body }: BlogBodyProps) => (
  <PortableText
    value={body}
    components={{
      list: {
        bullet: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
      },
      block: {
        h2: ({ children, value }) => <LinkableH2 text={toPlainText(value)}>{children}</LinkableH2>,
        h3: ({ children, value }) => <LinkableH3 text={toPlainText(value)}>{children}</LinkableH3>,
        normal: ({ children }) => <p className="text-base my-5">{children}</p>,
      },
      marks: {
        link: ({ text, value }) => <ExternalLink href={value.href}>{text}</ExternalLink>,
      },
      types: {
        inlineImage: ({ value }) => <InlineImage image={value.image} alt={value.alt} />,
        twitter: ({ value }) => <TwitterEmbedPreview url={value.url} />,
        blog: ({ value }) => <BlogCard isCondensed blogPreview={value} />,
        linkPreview: ({ value }) => <LinkPreview url={value.url} />,
      },
    }}
  />
);
