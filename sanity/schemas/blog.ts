import { defineField, defineType } from 'sanity';
import { InlineImagePreview } from './objects/image';

import { TwitterEmbedPreview } from './objects/twitter';

const BlogSchema = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blogs',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'number',
      name: 'viewCount',
      title: 'View count',
      readOnly: true,
      initialValue: 1,
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      to: { type: 'category' },
    }),
    defineField({
      type: 'text',
      name: 'excerpt',
      title: 'Excerpt',
      rows: 5,
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Content',
      of: [
        { type: 'block' },
        { type: 'inlineImage', components: { preview: InlineImagePreview } },
        { type: 'reference', title: 'Blog reference', to: [{ type: 'blog' }] },
        { type: 'twitter', components: { preview: TwitterEmbedPreview } },
      ],
    }),
  ],
});

export default BlogSchema;
