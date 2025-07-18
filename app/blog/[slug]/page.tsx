import dayjs from 'dayjs';
import { type Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { baseUrl } from '@/sanity/env';

import { BlogBody, BlogMetadata, BlogQuote, BlogRelatedPreview, BlogViewCounter } from './_components';

import { type BlogPostPageProps } from './page.types';
import { getBlogPost } from './page.helpers';

// Revalidate cache every 5h
export const revalidate = 60 * 60 * 5;

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata | undefined> => {
  const { slug: slugParam } = await params;
  const { post } = await getBlogPost(slugParam);

  if (!post) {
    return;
  }

  const { title, _createdAt: publishedTime, excerpt: description, slug } = post;
  const ogImage = `${baseUrl}/api/dynamic-image?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${slug}/`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { post, nextPost, previousPost } = await getBlogPost(slug);

  if (!post) {
    redirect('/not-found');
  }

  return (
    <>
      <BlogViewCounter blogId={post._id} />
      <div className="max-w-2xl mx-auto mt-12">
        <article className="leading-8">
          <div className="mb-11">
            <h1 className="font-mono font-bold text-4xl">{post.title}</h1>
            <div className="flex flex-col md:flex-row justify-between gap-1 mt-3 md:items-center">
              <span className="text-xs">{dayjs(post._createdAt).format('MMM D, YYYY')}</span>
              <BlogMetadata blog={post} />
            </div>
          </div>
          <BlogQuote excerpt={post.excerpt} />
          <hr className="border-white/50 dark:border-white/25 my-7" />
          <BlogBody body={post.body} />
          <hr className="border-white/50 dark:border-white/25 mt-12 mb-6" />
          {nextPost || previousPost ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <BlogRelatedPreview blogPreview={nextPost} direction="next" />
              <BlogRelatedPreview blogPreview={previousPost} direction="prev" />
            </div>
          ) : (
            <Link
              className="flex flex-col p-8 no-underline hover:bg-dark/5 hover:dark:bg-white/10 transition-all"
              href="/blog"
            >
              <span className="text-xs text-dark dark:text-white flex items-center gap-2">
                There are no other posts
              </span>
              <span className="text-lg font-mono font-bold text-dark dark:text-white truncate">
                Back to all stories
              </span>
            </Link>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
