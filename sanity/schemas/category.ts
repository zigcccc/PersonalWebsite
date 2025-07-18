import { defineField, defineType } from 'sanity';

const CategorySchema = defineType({
  type: 'document',
  name: 'category',
  title: 'Categories',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'image',
      name: 'icon',
      title: 'Icon',
    }),
  ],
});

export default CategorySchema;
