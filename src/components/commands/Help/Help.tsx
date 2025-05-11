import React from 'react';
import { commands } from "../commands";
import { KeyboardCommands, HelpCommand, HelpDescription, HelpList, HelpListItem } from './Help.styles';

export default function Help() {
    return (
        <div>
            <HelpList>
                {commands.map((command) => (
                    <HelpListItem key={command.cmd}>
                        <HelpCommand>{command.cmd}</HelpCommand>
                        <span>{Array(command.spaces).fill('\u00a0').join('')}</span>
                        <HelpDescription>- {command.description}</HelpDescription>
                    </HelpListItem>
                ))}
                <KeyboardCommands>ctrl + l
                    <span>{'\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'}</span>
                    - clear the terminal
                </KeyboardCommands>
            </HelpList>
        </div>
    );
};
