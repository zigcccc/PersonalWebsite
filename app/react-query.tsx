'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSelectedLayoutSegment } from 'next/navigation';
import { type PropsWithChildren, useState } from 'react';

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const segment = useSelectedLayoutSegment();
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } }));

  const showDevtools = process.env.NODE_ENV === 'development' && segment !== 'studio';
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {showDevtools && <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />}
    </QueryClientProvider>
  );
};
