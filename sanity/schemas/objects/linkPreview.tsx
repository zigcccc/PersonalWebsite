import { useQuery } from '@tanstack/react-query';

import { type WebsiteMetadata } from '@/types/metadata';
import Skeleton from '@atlaskit/skeleton';
import Image from 'next/image';

export const LinkPreviewCard = ({ url }: { url: string }) => {
  const { data, isLoading } = useQuery<WebsiteMetadata>({
    queryFn: () => fetch(`/api/tools/site-metadata?url=${url}`).then((res) => res.json()),
    queryKey: ['LinkPreview', url],
    enabled: !!url,
  });

  if (!data || isLoading) {
    return <Skeleton width="100%" borderRadius={6} height={340} />;
  }

  const image = data.image || `https://placehold.co/672x300?text=${data.title}`;

  return (
    <div>
      <div className="relative h-72">
        <Image layout="fill" objectFit="contain" src={image} alt={data.title ?? data.url} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{data.title ?? 'No title provided'}</span>
        <span className="text-xs">{data.url}</span>
      </div>
    </div>
  );
};

const LinkPreviewObjectSchema = {
  name: 'linkPreview',
  type: 'object',
  title: 'Link Preview Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Website URL',
    },
  ],
  preview: {
    select: { url: 'url' },
  },
};

export default LinkPreviewObjectSchema;
