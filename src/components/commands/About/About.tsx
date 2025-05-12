import React from 'react';

import { AboutContainer, Highlight } from './About.styles';

export default function About() {
    return (
        <AboutContainer>
            <p>
                Hello! My name is <Highlight>Jared Blumer</Highlight> (he/him).
            </p>
            <p>
                I’m a full-stack software engineer and data analyst with over five years of experience building scalable web apps and turning complex data into actionable insights. I specialize in <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Ruby on Rails</Highlight>, and <Highlight>Python</Highlight>.</p>
            <p>
                As a data analyst, I utilized <Highlight>Python</Highlight>, <Highlight>NumPy</Highlight>, <Highlight>Pandas</Highlight>, <Highlight>Matplotlib</Highlight>, and <Highlight>Tableau</Highlight> to analyze, visualize, and report on fundraising metrics and donor demographics for a database of 96,000 constituents. During my tenure, our small team of seven helped raise $41.2 million in donations through data-informed strategy and automation.
            </p>
            <p>
                I&apos;m a lifelong learner, driven by the principles of Deep Work and the Growth Mindset.
                Inspired by Stanford psychologist Carol Dweck, I believe that &quot;Effort is what makes you smart or talented.&quot;
                This belief fuels my dedication to continuous improvement and personal growth.
            </p>
        </AboutContainer >
    );
};
