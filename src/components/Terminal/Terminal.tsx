import React from "react";
import { Container, Input, Label } from './Terminal.styles';

export default function Terminal() {
    return (
        <Container>
            <Label htmlFor='terminal-input'>
                user@terminal.jaredblumer.dev:~$ &#62;
            </Label>
            <Input
                type='text'
                id='terminal-input'
                spellCheck='false'
                autoFocus
                autoCapitalize="none" />
        </Container>
    );
}