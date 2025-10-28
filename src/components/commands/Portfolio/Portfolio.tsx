import React from "react";

import { PortfolioContainer, Highlight, Link } from "./Portfolio.styles";

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <p>
        Project: <Highlight>Happeni</Highlight>
        <br />
        -------------------------------------
        <br />
        Inspired by Cognitive Behavioral Therapy (CBT), Happeni empowers users to create happiness
        by choosing and anticipating upcoming pleasant events. With personalized reminders, we help
        you stay focused on the positive moments that brighten your life.
        <br />
      </p>
      <p>
        Tech Stack:
        <br />
        - Ruby on Rails
        <br />- Tailwind CSS
      </p>
      <p>
        Links:
        <br />- App:{" "}
        <Link href="https://www.happeni.com/" target="_blank">
          https://www.happeni.com/
        </Link>
        <br />- Source:{" "}
        <Link href="https://github.com/jaredblumer/happeni" target="_blank">
          https://github.com/jaredblumer/happeni
        </Link>
      </p>
      <br />
      <p>
        Project: <Highlight>Freemodoro</Highlight>
        <br />
        -------------------------------------
        <br />
        Improve Your Focus and Boost Your Productivity With This Free and Open Source Pomodoro Timer
        <br />
      </p>
      <p>
        Tech Stack:
        <br />
        - React
        <br />
        - Redux
        <br />
        - React Router
        <br />
        - Jest
        <br />
        - React Testing Library
        <br />
      </p>
      <p>
        Links:
        <br />- App:{" "}
        <Link href="https://freemodoro-cbc150480d4a.herokuapp.com/" target="_blank">
          https://freemodoro-cbc150480d4a.herokuapp.com/
        </Link>
        <br />- Source:{" "}
        <Link href="https://github.com/jaredblumer/freemodoro" target="_blank">
          https://github.com/jaredblumer/freemodoro
        </Link>
      </p>
    </PortfolioContainer>
  );
}
