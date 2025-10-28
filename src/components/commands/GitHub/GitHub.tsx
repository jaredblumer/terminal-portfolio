import React from "react";
import { GitHubContainer, Link } from "./GitHub.styles";

export default function Email() {
  return (
    <GitHubContainer>
      <p>
        <Link href="https://github.com/jaredblumer/" target="_blank">
          https://github.com/jaredblumer/
        </Link>
      </p>
    </GitHubContainer>
  );
}
