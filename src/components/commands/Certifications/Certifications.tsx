import React from "react";

import { CertificationsContainer, Highlight } from "./Certifications.styles";

export default function Certifications() {
  return (
    <CertificationsContainer>
      <p>
        <Highlight>AWS Certified Solutions Architect – Associate</Highlight>
        <br />
        Issued May 2025
        <br />
      </p>
      <p>
        Demonstrates expertise in designing distributed systems on AWS that are scalable, resilient,
        cost-efficient, and secure. Validates ability to architect and deploy cloud-based solutions
        using AWS services, aligned with best practices and the AWS Well-Architected Framework.
      </p>
    </CertificationsContainer>
  );
}
