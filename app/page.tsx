import { type Metadata } from 'next';

import { Header } from '@/components/Elements/Header';
import { Banner } from '@/components/Elements/Banner';
import { Footer } from '@/components/Elements/Footer';

import { SectionContact, SectionDone, SectionWhat, SectionWho } from './page.sections';
import { projects } from './page.data';

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

const HomePage = () => (
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

export default HomePage;
