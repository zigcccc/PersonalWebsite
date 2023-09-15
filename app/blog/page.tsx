import { type Metadata } from 'next';
import Link from 'next/link';
import { groq } from 'next-sanity';

import { CTA } from '@/components/Buttons';
import { BlogCard } from '@/components/Elements/BlogCard';

import { client } from '@/sanity/lib/client';

import { type CategoryListItem } from '@/types/category';
import { type BlogPreview } from '@/types/blog';

import { type BlogsPageProps } from './page.types';
import { BlogCategories, BlogsSearch } from './page.components';
import Image from 'next/image';

export const generateMetadata = async ({ searchParams }: BlogsPageProps): Promise<Metadata> => {
  const title = searchParams.category ? `${searchParams.category} stories` : 'Stories';

  return {
    title,
    description:
      "Sometimes, I write stories. When I do, I share them on my blog. Be it a new discovery in the world of frontend, a random thought, or a new process that I've learned about, this is the place where I gather those thoughts.",
  };
};

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const blogs = await client.fetch<BlogPreview[]>(groq`
    *[
      _type == 'blog'
      ${searchParams.search ? ` && title match "${searchParams.search}*"` : ''}
      ${searchParams.category ? ` && category->name == "${searchParams.category}"` : ''}
    ] | order(_createdAt desc)[0..4] {
      _id,
      _createdAt,
      title,
      category->{ name, icon },
      "slug": slug.current,
      excerpt,
      viewCount,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }
  `);

  const categories = await client.fetch<CategoryListItem[]>(groq`
    *[_type == 'category'] | order(name asc) {
      _id,
      name
    }
  `);

  return (
    <>
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="font-mono font-bold text-4xl">&gt; My stories</h1>
      </div>
      <div className="mb-6 py-4 sticky top-0 bg-white dark:bg-gray max-w-6xl mx-auto flex flex-col gap-8">
        <BlogsSearch />
        <BlogCategories categories={categories} />
      </div>
      {blogs.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {blogs.map((blogPreview) => (
            <BlogCard key={blogPreview._id} blogPreview={blogPreview} />
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 p-16">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono font-bold text-2xl">Dang it...</h2>
            <p>There are no stories matching your search criteria.</p>
          </div>
          <Link href="/blog" passHref legacyBehavior>
            <CTA size="small">Show all stories</CTA>
          </Link>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
