import { groq } from 'next-sanity';

import { client } from '@/sanity/lib/client';

import { blogFullQuery, blogPreviewQuery } from '@/queries/blogs';
import { type BlogPreview, type Blog } from '@/types/blog';

export const getBlogPost = async (slug: string) => {
  const post = await client.fetch<Blog>(groq`
    *[_type == 'blog' && slug.current == "${slug}"][0] { ${blogFullQuery} }
  `);

  const previousPost = await client.fetch<BlogPreview | null>(groq`
    *[_type == 'blog' && _createdAt < "${post._createdAt}"][0] { ${blogPreviewQuery} }
  `);

  const nextPost = await client.fetch<BlogPreview | null>(groq`
    *[_type == 'blog' && _createdAt > "${post._createdAt}"][0] { ${blogPreviewQuery} }
  `);

  return { post, previousPost, nextPost };
};
