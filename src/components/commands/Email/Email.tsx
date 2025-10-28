import React from "react";
import { EmailContainer, Link } from "./Email.styles";

export default function Email() {
  return (
    <EmailContainer>
      <p>
        <Link href="mailto:jaredblumer@protonmail.com">jaredblumer@protonmail.com</Link>
      </p>
    </EmailContainer>
  );
}
