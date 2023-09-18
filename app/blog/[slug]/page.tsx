import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import { groq } from 'next-sanity';

import { baseUrl } from '@/sanity/env';
import { client } from '@/sanity/lib/client';

import { type Blog } from '@/types/blog';

import { type BlogPostPageProps } from './page.types';
import { BlogBody, BlogQuote, BlogViewCounter } from './page.components';

const getBlogPost = async (slug: string) => {
  const post = await client.fetch<Blog>(groq`
    *[_type == 'blog' && slug.current == "${slug}"][0] {
      ...,
      category->{ name, icon },
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      body[] {
        _type != "reference" => @,
        _type == "reference" => @-> {
          _type == "blog" => {
            ...,
            "slug": slug.current,
            category->{ name, icon },
            "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
          },
          _type != "blog" => @
        },
        _type == "inlineImage" => {
          ...,
          image {
            asset->{
              ...,
              metadata
            }
          }
        },
      }
    }
  `);

  return post;
};

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata | undefined> => {
  const post = await getBlogPost(params.slug);

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
  const post = await getBlogPost(params.slug);

  if (!post) {
    redirect('/not-found');
  }

  return (
    <>
      <BlogViewCounter blogId={post._id} />
      <div className="max-w-2xl mx-auto mt-12">
        <article className="leading-8">
          <h1 className="font-mono font-bold text-4xl mb-8">{post.title}</h1>
          <BlogQuote excerpt={post.excerpt} />
          <hr className="border-white/50 mt-7" />
          <div className="[&>p]:my-7">
            <BlogBody body={post.body} />
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
