import React from "react";
import About from "../commands/About/About";
import Help from "../commands/Help/Help";
import { OutputContainer } from './Output.styles';

type OutputProps = {
    cmd: string;
};

export default function Output({ cmd }: OutputProps) {
    return <OutputContainer>
        {
            {
                about: <About />,
                help: <Help />,
            }[cmd]
        }

    </OutputContainer>;
}
