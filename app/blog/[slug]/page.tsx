import dayjs from 'dayjs';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

import { baseUrl } from '@/sanity/env';

import { BlogBody, BlogMetadata, BlogQuote, BlogRelatedPreview, BlogViewCounter } from './_components';

import { type BlogPostPageProps } from './page.types';
import { getBlogPost } from './page.helpers';

// Revalidate cache every 5h
export const revalidate = 60 * 60 * 5;

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata | undefined> => {
  const { post } = await getBlogPost(params.slug);

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
  const { post, nextPost, previousPost } = await getBlogPost(params.slug);

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
            <div className="flex justify-between mt-3 items-center">
              <span className="text-xs">{dayjs(post._createdAt).format('MMM D, YYYY')}</span>
              <BlogMetadata blog={post} />
            </div>
          </div>
          <BlogQuote excerpt={post.excerpt} />
          <hr className="border-white/50 dark:border-white/25 my-7" />
          <BlogBody body={post.body} />
          <hr className="border-white/50 dark:border-white/25 mt-12 mb-6" />
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <BlogRelatedPreview blogPreview={nextPost} direction="next" />
              <BlogRelatedPreview blogPreview={previousPost} direction="prev" />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
