import React from "react";
import { EmDash, Label, PromptSymbol } from './TerminalInfo.styles';

export default function TerminalInfo() {
    return (
        <Label htmlFor='terminal-input'>
            user@terminal.jaredblumer.dev<PromptSymbol>:</PromptSymbol><EmDash>~</EmDash><PromptSymbol>$</PromptSymbol>&nbsp;
        </Label>
    )
}