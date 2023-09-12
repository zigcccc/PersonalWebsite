export type Project = {
  company: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  dark: boolean;
  artwork: string;
  cta: {
    url: string;
    text: string;
  };
};
