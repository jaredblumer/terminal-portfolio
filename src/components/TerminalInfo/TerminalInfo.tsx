import React from "react";
import { HostSpan, Label, UserSpan } from "./TerminalInfo.styles";

export default function TerminalInfo() {
  return (
    <Label htmlFor="terminal-input">
      <UserSpan>user</UserSpan>@<HostSpan>jaredblumer.com</HostSpan>:<UserSpan>~</UserSpan>$&nbsp;
    </Label>
  );
}
