import React from 'react';
import { commands } from "../commands";
import { HelpCommand, HelpList, HelpListItem } from './Help.styles';

export default function Help() {
    return (
        <div>
            <HelpList>
                {commands.map((command) => (
                    <HelpListItem key={command.cmd}>
                        <HelpCommand>{command.cmd}</HelpCommand>
                        <span>{Array(command.spaces).fill('\u00a0').join('')}</span>
                        <span>- {command.description}</span>
                    </HelpListItem>
                ))}
            </HelpList>
        </div>
    );
};