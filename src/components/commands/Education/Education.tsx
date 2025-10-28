import React from "react";

import { EducationContainer, Highlight } from "./Education.styles";

export default function Education() {
  return (
    <EducationContainer>
      <p>
        I began my career in secondary education, then transitioned into software engineering in
        2012 through roles in data analysis, database administration, and full stack development.
      </p>
      <p>I&apos;m currently preparing for a Master&apos;s Degree in Computer Science.</p>
      <p>
        <Highlight>Bachelor of Science in Secondary Education</Highlight>
        <br />
        Penn State University, 2007-2011 — GPA: 3.67/4.0
        <br />
      </p>
    </EducationContainer>
  );
}
