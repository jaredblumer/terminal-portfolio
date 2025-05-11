import React from 'react';

import { AboutContainer, Highlight } from './About.styles';

export default function About() {
    return (
        <AboutContainer>
            <p>
                Hello! My name is <Highlight>Jared Blumer</Highlight> (he/him).
            </p>
            <p>
                I’m a full-stack software engineer and data analyst with 5+ years of experience building scalable, user-friendly web apps using React, TypeScript, JavaScript, Node.js, and Ruby on Rails.
            </p>
            <p>
                I&apos;m a lifelong learner, driven by the principles of Deep Work and the Growth Mindset.
                Inspired by Stanford psychologist Carol Dweck, I believe that &quot;Effort is what makes you smart or talented.&quot;
                This belief fuels my dedication to continuous improvement and personal growth.
            </p>
        </AboutContainer>
    );
};
