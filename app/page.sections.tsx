'use client';

import { ContactButton, CTA } from '@/components/Buttons';
import { ProjectCard, TechBadge, type TechType } from '@/components/Elements';
import { ComputerThinking } from '@/components/Graphics';
import { Column, ProjectsGrid, Row, Section } from '@/components/Layout';
import { SubHeading, Heading, Paragraph } from '@/components/Typography';

import { type Project } from '@/types/project';

import { scrollToId } from '@/utils/functions';

export const SectionWho = () => (
  <Section id="who">
    <Row>
      <Column size={12} noMobileSpacing>
        <SubHeading>Hello, I&apos;m Žiga</SubHeading>
        <Heading>Who am I?</Heading>
      </Column>
    </Row>
    <Row vAlign="bottom">
      <Column size={6}>
        <Paragraph>Creative, open-minded and always thirsty for new knowledge.</Paragraph>
        <Paragraph>
          I&apos;m a {new Date().getFullYear() - 1996} years old <strong>frontend developer</strong> with a tendency
          towards web development and web design in general. I&apos;m always eager to provide a smooth and pleasant user
          experience for the end-user of web (or mobile) application. My weapon of choice is <strong>JavaScript</strong>
          , more specifically <strong>React.js</strong> framework. I&apos;m interested in UX and UI in terms of how we
          can influence the user through design and interactions.{' '}
        </Paragraph>
        <CTA onClick={() => scrollToId('contact')}>Let&apos;s talk</CTA>
      </Column>
      <Column size={6}>
        <ComputerThinking />
      </Column>
    </Row>
  </Section>
);

export const SectionWhat = ({ techStacks }: { techStacks: TechType[] }) => (
  <Section id="what">
    <Row vAlign="middle">
      <Column size={5}>
        {techStacks.map((tech) => (
          <TechBadge tech={tech} key={tech} />
        ))}
      </Column>
      <Column size={6} offset={1}>
        <SubHeading>Frontend Javascript Developer</SubHeading>
        <Heading>What am I good at?</Heading>
        <Paragraph>
          Although my formal education background comes from the design and multimedia area,{' '}
          <strong>I excel at programing</strong> which I&apos;ve been learning since the age of fifteen.
        </Paragraph>
        <Paragraph>
          <strong>I specialize in JavaScript</strong>, more specifically the <strong>React library</strong>. Using
          hooks, calling lifecycle methods, rendering high performant components, interacting with external APIs, and
          storing data in state containers are my everyday tasks. Besides React, I also have a deep understanding of the{' '}
          <strong>Redux state management</strong> library and <strong>Sass CSS preprocessor</strong>.
        </Paragraph>
        <CTA href="https://www.linkedin.com/in/zigakrasovec/" target="_blank">
          My LinkedIn profile
        </CTA>
      </Column>
    </Row>
  </Section>
);

export const SectionDone = ({ projects }: { projects: Project[] }) => (
  <Section id="done" centered>
    <SubHeading>Some of my work</SubHeading>
    <Heading>What have I done so far?</Heading>
    <ProjectsGrid>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.company} />
      ))}
    </ProjectsGrid>
    <CTA href="https://github.com/zigcccc/" target="_blank">
      My GitHub profile
    </CTA>
  </Section>
);

export const SectionContact = () => (
  <Section id="contact">
    <Row>
      <Column size={12} noMobileSpacing>
        <SubHeading>Contact forms are boring</SubHeading>
        <Heading>Connect with me</Heading>
      </Column>
    </Row>
    <Row vAlign="top">
      <Column size={6}>
        <Paragraph>
          I always like a good debate (as long as it&apos;s not about the politics{' '}
          <span role="img" aria-label="idk">
            ‍🤷‍♂️
          </span>
          ). Whether it&apos;s about a new uprising technology, a new idea that&apos;s tinkering your mind or about
          something as common as where to hike on a sunny weekend, I&apos;m up for it.{' '}
          <strong>I like to share my knowledge</strong>; I know I&apos;ve learned the most from asking questions and
          listening to the experts of this field, so if I can give some of this knowledge back, I am more than happy to
          do so.
        </Paragraph>
        <Paragraph>
          So, if you think we might have a few words to exchange, <strong>connect with me</strong> via one of the
          channels and I&apos;m sure we&apos;ll find a common language.
        </Paragraph>
      </Column>
      <Column size={5} offset={1}>
        <ContactButton icon="email" href="mailto:zkrasovec@gmail.com" text="Write me en e-mail" />
        <ContactButton icon="facebook" href="https://www.facebook.com/zkrasovec" text="Find me on Facebook" />
        <ContactButton
          icon="linkedin"
          href="https://www.linkedin.com/in/zigakrasovec/"
          text="Connect with me on LinkedIn"
        />
      </Column>
    </Row>
  </Section>
);
