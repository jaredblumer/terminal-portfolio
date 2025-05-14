import React from "react";
import About from "../commands/About/About";
import Certifications from "../commands/Certifications/Certifications";
import Education from "../commands/Education/Education";
import Email from "../commands/Email/Email";
import Hello from "../commands/Hello/Hello";
import Help from "../commands/Help/Help";
import GitHub from "../commands/GitHub/GitHub";
import LinkedIn from "../commands/LinkedIn/LinkedIn";
import Portfolio from "../commands/Portfolio/Portfolio";

import { OutputContainer } from './Output.styles';


type OutputProps = {
    cmd: string;
};

export default function Output({ cmd }: OutputProps) {
    return <OutputContainer>
        {
            {
                about: <About />,
                certifications: <Certifications />,
                education: <Education />,
                email: <Email />,
                hello: <Hello />,
                help: <Help />,
                github: <GitHub />,
                linkedin: <LinkedIn />,
                portfolio: <Portfolio />,
            }[cmd]
        }

    </OutputContainer>;
}
