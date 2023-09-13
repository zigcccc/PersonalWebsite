import { type SchemaTypeDefinition } from 'sanity';

import ProjectSchema from './schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema],
};
