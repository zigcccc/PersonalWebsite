'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import qs from 'qs';

export const useDynamicSearchParams = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleToggleParam = (param: string, newValue: string) => {
    const current = new URLSearchParams(Array.from(params.entries()));

    if (!newValue) {
      current.delete(param);
    } else {
      current.set(param, newValue);
    }

    const queryString = current.toString();
    const query = queryString ? `?${queryString}` : '';

    router.push(`${pathname}${query}`);
  };

  return {
    params: qs.parse(params.toString()),
    toggleParam: handleToggleParam,
  };
};
