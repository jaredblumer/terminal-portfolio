'use client';

import React, { useEffect, useState, useRef } from "react";
import { Form, Input, Wrapper } from './Terminal.styles';
import TerminalInfo from "../TerminalInfo/TerminalInfo";

export default function Terminal() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [cmdHistory, setCmdHistory] = useState<string[]>([""]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCmdHistory([inputValue, ...cmdHistory]);
        setInputValue("");
    }

    useEffect(() => {
        const handleClick = () => {
            inputRef.current?.focus();
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <TerminalInfo />
                <Input
                    ref={inputRef}
                    type='text'
                    id='terminal-input'
                    spellCheck='false'
                    autoFocus
                    autoCapitalize="none"
                    value={inputValue}
                    onChange={handleChange} />
            </Form>

            {cmdHistory.map((cmd, index) => (
                <div key={index} className="terminal-command">
                    <TerminalInfo />
                    <span className="terminal-prompt">{cmd}</span>
                </div>
            ))}
        </Wrapper>
    );
}