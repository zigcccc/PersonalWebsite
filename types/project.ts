import { type Image } from 'sanity';

export type Project = {
  company: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  dark: boolean;
  artwork: Image;
  cta: {
    url: string;
    text: string;
  };
};
