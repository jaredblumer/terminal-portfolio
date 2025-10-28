import React from "react";

import { AboutContainer, Highlight, Link } from "./About.styles";

export default function About() {
  return (
    <AboutContainer>
      <p>
        Hello! My name is <Highlight>Jared Blumer</Highlight> (he/him).
      </p>
      <p>
        I’m a results-driven Software Engineer with 5+ years of experience building full stack web
        applications that serve millions of users. I focus on crafting high-performance, reliable
        systems and modernizing development workflows using <Highlight>TypeScript</Highlight>,{" "}
        <Highlight>React</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Python</Highlight>,{" "}
        <Highlight>Ruby on Rails</Highlight>, <Highlight>AWS</Highlight>,{" "}
        <Highlight>Docker</Highlight>, and <Highlight>Terraform</Highlight>.
      </p>
      <p>
        Beyond professional work, I’m passionate about community and collaboration. As the founder
        of{" "}
        <Link href="https://www.meetup.com/code-and-coffee-pgh/" target="_blank">
          Code & Coffee Pittsburgh
        </Link>
        , I organize monthly meetups that bring together over 1,800 developers to learn, share
        skills, and support one another in an inclusive environment.
      </p>
      <p>
        I’m driven by the challenge of designing software that’s fast, maintainable, and genuinely
        useful—whether improving internal tools, enhancing user experiences, or architecting
        dependable infrastructure for large-scale systems.
      </p>
      <p>
        I&apos;m a lifelong learner, driven by the principles of Deep Work and the Growth Mindset.
        Inspired by Stanford psychologist Carol Dweck, I believe that &quot;Effort is what makes you
        smart or talented.&quot; This belief fuels my dedication to continuous improvement and
        personal growth.
      </p>
      <p>
        For a detailed overview of my professional background, technical skills, and open-source
        experience, you can{" "}
        <Link href="/resume/Jared_Blumer_Resume.pdf" target="_blank">
          view my resume
        </Link>
        .
      </p>
    </AboutContainer>
  );
}
