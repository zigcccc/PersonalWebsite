import fs from 'fs';
import path from 'path';
import { ImageResponse, type NextRequest } from 'next/server';

export const runtime = 'edge';

const OGDynamicImage = ({ origin, title }: { origin: string; title: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Fira Mono',
        paddingLeft: 112,
        paddingRight: 112,
        paddingTop: 72,
        paddingBottom: 72,
        backgroundImage: `url(${origin}/images/og-bg.png)`,
        height: '100%',
        width: '100%',
      }}
    >
      <div style={{ marginTop: 96, display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 24, color: '#606060', fontFamily: 'Fira Mono' }}>Ziga&apos;s stories</span>
        <span style={{ fontSize: 64, marginTop: 16, fontFamily: 'Fira Mono' }}>{title}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div />
      </div>
    </div>
  );
};

export const GET = async (request: NextRequest) => {
  const { searchParams, origin } = new URL(request.url);

  const base = import.meta.url.replace('file://', '');

  let font: Buffer | ArrayBuffer;

  if (process.env.NODE_ENV === 'development') {
    font = fs.readFileSync(path.join(base, '../../../../public/fonts/FiraMono-Bold.ttf')).buffer;
  } else {
    const fontData = fetch(new URL('../../../public/fonts/FiraMono-Bold.ttf', import.meta.url)).then((res) =>
      res.arrayBuffer()
    );
    font = await fontData;
  }

  const title = searchParams.get('title') ?? "Ziga's Stories";

  return new ImageResponse(<OGDynamicImage origin={origin} title={title} />, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Fira Mono', data: font, style: 'normal' }],
  });
};
