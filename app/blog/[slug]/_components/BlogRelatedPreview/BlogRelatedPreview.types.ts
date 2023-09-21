import { type BlogPreview } from '@/types/blog';

export type BlogRelatedPreviewProps = {
  blogPreview: BlogPreview | null;
  direction: 'prev' | 'next';
};
