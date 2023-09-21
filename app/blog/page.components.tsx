'use client';
import clsx from 'clsx';
import { ChangeEvent, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useEffectOnce } from 'react-use';

import { useDynamicSearchParams } from '@/hooks/useAppSearchParams';
import { useOperatingSystem } from '@/hooks/useOperatingSystem';

import { type CategoryListItem } from '@/types/category';

export const BlogsSearch = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const os = useOperatingSystem();
  const { toggleParam } = useDynamicSearchParams();

  const modKeySymbol = os === 'mac' ? '⌘' : 'CTRL';

  useHotkeys('mod+k', () => {
    ref.current?.focus();
    window.scrollTo({ behavior: 'smooth', top: window.scrollY + (ref.current?.getBoundingClientRect().top ?? 0) });
  });

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    toggleParam('search', evt.target.value);
  };

  return (
    <div className="relative flex items-center">
      <kbd className="absolute hidden md:inline-block right-2 px-2 py-1.5 text-xs font-semibold text-dark bg-white border border-gray-3 border-solid rounded-lg dark:bg-gray-4 dark:text-gray-1 dark:border-gray-3">
        {modKeySymbol} + K
      </kbd>
      <input
        role="search"
        ref={ref}
        className="flex-1 text-dark dark:text-white appearance-none outline-1 outline-transparent outline border-none p-4 rounded bg-dark/5 dark:bg-white/10 focus:outline-gray-3 dark:placeholder:text-white/50 placeholder:text-dark/50"
        type="text"
        onChange={handleSearch}
        placeholder="Search stories"
      />
    </div>
  );
};

export const BlogCategories = ({ categories }: { categories: CategoryListItem[] }) => {
  const { toggleParam, params } = useDynamicSearchParams();
  const ref = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryName: string) => {
    if (params.category === categoryName) {
      toggleParam('category', '');
      ref.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      toggleParam('category', categoryName);
    }
  };

  useEffectOnce(() => {
    if (params.category) {
      const selected = ref.current?.querySelector(`#${params.category}`);

      if (!selected) {
        return;
      }

      ref.current?.scrollTo({
        left: selected.getBoundingClientRect().left,
        behavior: 'smooth',
      });
    }
  });

  return (
    <div className="flex overflow-x-scroll gap-3" ref={ref}>
      <button
        aria-label="Show all categories"
        className={clsx(
          'appearance-none whitespace-nowrap outline-none border-none rounded px-4 py-2 text-sm md:text-base font-mono font-bold hover:bg-primary/75 transition-all ease-in-out',
          !params.category && 'bg-primary text-dark',
          !!params.category && 'bg-dark/5 dark:bg-white/10 text-dark dark:text-white'
        )}
        key="all-categories"
        onClick={() => toggleParam('category', '')}
      >
        All categories
      </button>

      {categories.map((category) => {
        const isActive = params.category === category.name;

        return (
          <button
            aria-label={`Select category ${category.name}`}
            className={clsx(
              'appearance-none whitespace-nowrap outline-none border-none rounded px-4 py-2 font-mono font-bold hover:bg-primary/75 transition-all ease-in-out',
              isActive && 'bg-primary text-dark',
              !isActive && 'bg-dark/5 dark:bg-white/10 text-dark dark:text-white'
            )}
            key={category._id}
            id={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};
