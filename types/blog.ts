import { type TypedObject } from 'sanity';

import { type Category } from './category';

export type BlogPreview = {
  _id: string;
  _createdAt: string;
  category: Category;
  title: string;
  slug: string;
  excerpt: string;
  estimatedReadingTime: number;
  viewCount: number;
};

export type Blog = BlogPreview & {
  body: TypedObject[];
};
