import { groq } from 'next-sanity';
import { NextResponse, type NextRequest } from 'next/server';

import { blogFullQuery, blogPreviewQuery } from '@/queries/blogs';

import { client } from '@/sanity/lib/client';

import { type Blog } from '@/types/blog';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const query = request.nextUrl.searchParams.get('style') === 'preview' ? blogPreviewQuery : blogFullQuery;
  const data = await client.fetch<Blog>(groq`
    *[_type == 'blog' && _id == "${params.id}"][0] { ${query} }
  `);

  return NextResponse.json(data, { status: 200 });
};
