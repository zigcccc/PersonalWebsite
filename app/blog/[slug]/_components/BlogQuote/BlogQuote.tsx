import QuoteIcon from '@atlaskit/icon/glyph/editor/quote';

import { type BlogQuoteProps } from './BlogQuote.types';

export const BlogQuote = ({ excerpt }: BlogQuoteProps) => (
  <cite className="relative">
    <span className="absolute -z-10 -top-6 -left-6 [&>span>svg]:text-gray/20 [&>span>svg]:dark:text-white/20">
      <QuoteIcon label="description" size="xlarge" />
    </span>
    <p className="leading-8">{excerpt}</p>
  </cite>
);
