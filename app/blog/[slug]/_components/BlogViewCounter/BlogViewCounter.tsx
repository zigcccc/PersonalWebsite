import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useEffectOnce } from 'react-use';

import { type BlogViewCounterProps } from './BlogViewCounter.types';

export const BlogViewCounter = ({ blogId }: BlogViewCounterProps) => {
  const didCount = useRef(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => fetch(`/api/cms/blog/${id}/incrementViewCount`, { method: 'PATCH' }),
    mutationKey: ['incrementBlogViewCount', blogId],
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['Blog', id] });
    },
  });

  useEffectOnce(() => {
    if (!didCount.current) {
      didCount.current = true;
      mutation.mutate(blogId);
    }
  });

  return null;
};
