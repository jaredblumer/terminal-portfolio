"use client";

import styled from "styled-components";

export const HelpCommand = styled.span`
  color: #99df4d;
  line-height: 1.25rem;
`;

export const HelpDescription = styled.span`
  @media (max-width: 550px) {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const HelpList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const HelpListItem = styled.li`
  list-style: none;
  margin: 0.25rem 0;
`;

export const KeyboardCommands = styled.p`
  line-height: 1.25rem;
  margin: 0.25rem 0;

  @media (max-width: 550px) {
    display: none;
  }
`;
