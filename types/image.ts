import { Image, Reference } from 'sanity';

export type ImageWithBlurHash = Image & {
  asset: Reference & {
    metadata: { blurHash: string; lqip: string };
  };
};
