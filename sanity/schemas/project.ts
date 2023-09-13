import { defineArrayMember, defineField, defineType } from 'sanity';

const ProjectSchema = defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'tech',
        }),
      ],
    }),
    defineField({
      name: 'dark',
      type: 'boolean',
      title: 'Dark?',
    }),
    defineField({
      name: 'artwork',
      type: 'image',
      title: 'Artwork',
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'CTA',
      fields: [defineField({ name: 'url', type: 'url' }), defineField({ name: 'text', type: 'string' })],
    }),
  ],
});

export default ProjectSchema;
