import { type Image } from 'sanity';

export type CategoryListItem = {
  _id: string;
  name: string;
};

export type Category = {
  name: string;
  icon: Image;
};
