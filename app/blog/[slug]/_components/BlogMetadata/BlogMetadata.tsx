import { useQuery } from '@tanstack/react-query';

import { type BlogMetadataProps } from './BlogMetadata.types';

export const BlogMetadata = ({ blog }: BlogMetadataProps) => {
  const { data } = useQuery({
    queryFn: () => fetch(`/api/cms/blog/${blog._id}?style=preview`).then((res) => res.json()),
    queryKey: ['Blog', blog._id],
    enabled: !!blog,
    initialData: blog,
  });

  return (
    <div className="flex gap-2">
      <span className="text-xs">{data?.estimatedReadingTime || 1}min reading time</span>
      <span className="text-xs">•</span>
      <span className="text-xs">{data?.viewCount ?? 0} views</span>
    </div>
  );
};
