import React from 'react';

export type ImageExtensions = 'jpg' | 'jpeg' | 'png' | 'svg' | 'gif';

export interface ImageProps {
  path: string;
  fallbackExtension?: ImageExtensions;
  alt: string;
  [x: string]: any;
}

export const Image = ({ path, fallbackExtension = 'png', alt, ...props }: ImageProps) => (
  <picture>
    <source srcSet={`${path}.webp`} type="image/webp" />
    <source srcSet={`${path}.png`} type="image/png" />
    <img {...props} src={`${path}.${fallbackExtension}`} alt={alt} />
  </picture>
);
