import { NextResponse, type NextRequest } from 'next/server';

import { client } from '@/sanity/lib/client';

export const PATCH = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('id');

  if (!blogId) {
    return;
  }

  const patched = await client.patch(blogId).inc({ viewCount: 1 }).commit();

  return NextResponse.json(patched);
};
