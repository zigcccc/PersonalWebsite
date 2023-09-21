import { NextResponse, type NextRequest } from 'next/server';
import urlMetadata from 'url-metadata';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const websiteUrl = searchParams.get('url');

  if (!websiteUrl) {
    return NextResponse.json(
      { error: 'No website URL provided. Make sure you add `url` query param.' },
      { status: 400 }
    );
  }

  try {
    const metadata = await urlMetadata(websiteUrl);
    return NextResponse.json(
      {
        title: metadata['og:title'] || metadata['twitter:title'],
        description: metadata['og:description'] || metadata['twitter:description'],
        image: metadata['og:image'] || metadata['twitter:image'],
        url: metadata.url || metadata['og:url'] || metadata['twitter:url'] || websiteUrl,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong while fetching the website metadata' }, { status: 400 });
  }
};
