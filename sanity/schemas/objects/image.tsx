import Image from 'next/image';
import { type Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';

export const InlineImagePreview = ({ image, alt }: { image: SanityImage; alt: string }) => {
  const img = useNextSanityImage(client, image);

  if (!img) {
    return <>No image added yet</>;
  }

  return <Image {...img} alt={alt} />;
};

const InlineImageObjectSchema = {
  name: 'inlineImage',
  type: 'object',
  title: 'Inline Image',
  fields: [
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Description',
    },
  ],
  preview: {
    select: { image: 'image', alt: 'alt' },
  },
};

export default InlineImageObjectSchema;
