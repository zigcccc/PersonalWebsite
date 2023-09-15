import { type Metadata } from 'next';
import { groq } from 'next-sanity';

import { Header } from '@/components/Elements/Header';
import { Banner } from '@/components/Elements/Banner';
import { Footer } from '@/components/Elements/Footer';

import { client } from '@/sanity/lib/client';

import { type BlogPreview } from '@/types/blog';
import { type Project } from '@/types/project';

import { SectionContact, SectionDone, SectionStories, SectionWhat, SectionWho } from './page.sections';

const sections = [
  { label: 'Who?', id: 'who' },
  { label: 'What?', id: 'what' },
  { label: 'Done!', id: 'done' },
  { label: 'Stories', id: 'stories' },
];

export const metadata: Metadata = {
  description:
    "I'm a frontend developer with a tendency towards web development and web design in general. I'm always eager to provide a smooth and pleasant user experience for the end-user of web (or mobile) application.",
};

const HomePage = async () => {
  const projects = await client.fetch<Project[]>(groq`*[_type == 'project'] | order(_createdAt desc)`);
  const blogs = await client.fetch<BlogPreview[]>(groq`
    *[_type == 'blog'] | order(_createdAt desc)[0..4] {
      _id,
      _createdAt,
      title,
      category->{ name, icon },
      "slug": slug.current,
      excerpt,
      viewCount,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }
  `);

  return (
    <>
      <Header navItems={sections} />
      <Banner />
      <SectionWho />
      <SectionWhat techStacks={['sass', 'react', 'javascript']} />
      <SectionDone projects={projects} />
      <SectionStories blogs={blogs} />
      <SectionContact />
      <Footer />
    </>
  );
};

export default HomePage;
