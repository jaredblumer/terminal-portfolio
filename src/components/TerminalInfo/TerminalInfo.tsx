import React from "react";
import { HostSpan, Label, UserSpan } from './TerminalInfo.styles';

export default function TerminalInfo() {
    return (
        <Label htmlFor='terminal-input'>
            <UserSpan>user</UserSpan>@<HostSpan>terminal.jaredblumer.dev</HostSpan>:<UserSpan>~</UserSpan>$&nbsp;
        </Label>
    )
}
