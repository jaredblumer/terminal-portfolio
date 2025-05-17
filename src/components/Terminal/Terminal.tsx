'use client';

import React, { useEffect, useState, useRef } from "react";
import { CmdNotFound, Form, Input, Wrapper } from './Terminal.styles';
import Output from "../Output/Output";
import TerminalInfo from "../TerminalInfo/TerminalInfo";

import { Ubuntu_Mono } from 'next/font/google';

const ubuntuMono = Ubuntu_Mono({
    subsets: ['latin'],
    weight: '400',
})

import { commands } from "../commands/commands";

export default function Terminal() {
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const [cmdHistory, setCmdHistory] = useState<string[]>(["hello"]);
    const [inputValue, setInputValue] = useState("");

    const validCommand = (name: string) => {
        return commands.some(c => c.cmd === name);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedInputValue = inputValue.trim();

        if (trimmedInputValue === 'clear') {
            setCmdHistory([]);
            setInputValue('');
        }
        else {
            setCmdHistory([...cmdHistory, trimmedInputValue]);
            setInputValue("");
        }
    }

    useEffect(() => {
        const focusInput = () => inputRef.current?.focus();
        document.addEventListener('click', focusInput);
        const timer = setTimeout(focusInput, 1);

        return () => {
            document.removeEventListener('click', focusInput);
            clearTimeout(timer);
        };
    }, [inputValue]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                setCmdHistory([]);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [cmdHistory]);

    return (
        <Wrapper>
            {cmdHistory.map((cmd, index) => (
                <div key={`${cmd}-${index}`} className="terminal-command">
                    <TerminalInfo />
                    <span className="terminal-prompt">{cmd}</span>
                    {validCommand(cmd.trim()) ? (
                        <Output cmd={cmd.trim()} />
                    ) : (
                        <CmdNotFound>command not found: {cmd}</CmdNotFound>
                    )}
                </div>
            ))
            }

            <Form onSubmit={handleSubmit}>
                <label htmlFor="terminal-input" className="sr-only">Terminal input</label>
                <TerminalInfo />
                <Input
                    className={ubuntuMono.className}
                    ref={inputRef}
                    type='text'
                    id='terminal-input'
                    spellCheck='false'
                    autoFocus
                    autoCapitalize="none"
                    value={inputValue}
                    onChange={handleChange} />
            </Form>

            <div ref={bottomRef} />
        </Wrapper >
    );
}
