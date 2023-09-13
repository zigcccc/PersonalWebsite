import { type Metadata } from 'next';
import { groq } from 'next-sanity';

import { Header } from '@/components/Elements/Header';
import { Banner } from '@/components/Elements/Banner';
import { Footer } from '@/components/Elements/Footer';

import { client } from '@/sanity/lib/client';

import { SectionContact, SectionDone, SectionWhat, SectionWho } from './page.sections';

const sections = [
  { label: 'Who?', id: 'who' },
  { label: 'What?', id: 'what' },
  { label: 'Done!', id: 'done' },
];

export const metadata: Metadata = {
  title: 'Žiga Krašovec :: Frontend Web Developer',
  description:
    "I'm a frontend developer with a tendency towards web development and web design in general. I'm always eager to provide a smooth and pleasant user experience for the end-user of web (or mobile) application.",
};

const HomePage = async () => {
  const projects = await client.fetch(groq`*[_type == 'project'] | order(_createdAt desc)`, {});

  return (
    <>
      <Header navItems={sections} />
      <Banner />
      <SectionWho />
      <SectionWhat techStacks={['sass', 'react', 'javascript']} />
      <SectionDone projects={projects} />
      <SectionContact />
      <Footer />
    </>
  );
};

export default HomePage;
