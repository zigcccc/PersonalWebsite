import { NextResponse, type NextRequest } from 'next/server';

import { client } from '@/sanity/lib/client';

export const PATCH = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const { id: blogId } = params;

  if (!blogId) {
    return;
  }

  const patched = await client.patch(blogId).inc({ viewCount: 1 }).commit();

  return NextResponse.json(patched);
};
