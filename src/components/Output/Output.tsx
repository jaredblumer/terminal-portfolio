import React from "react";
import About from "../commands/About/About";
import Education from "../commands/Education/Education";
import Hello from "../commands/Hello/Hello";
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
                education: <Education />,
                hello: <Hello />,
                help: <Help />,
            }[cmd]
        }

    </OutputContainer>;
}
