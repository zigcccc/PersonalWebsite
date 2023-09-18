import { type SchemaTypeDefinition } from 'sanity';

import BlogSchema from './schemas/blog';
import CategorySchema from './schemas/category';
import InlineImageObjectSchema from './schemas/objects/image';
import TwitterObjectSchema from './schemas/objects/twitter';
import ProjectSchema from './schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema, BlogSchema, CategorySchema, TwitterObjectSchema, InlineImageObjectSchema],
};
