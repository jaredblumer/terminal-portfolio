import React from 'react';

import { HelloContainer, Highlight, Link, PreName, PreNameMobile } from './Hello.styles';

export default function Hello() {
    return (
        <HelloContainer>
            <PreName>
                {String.raw`
    __                   _    _____  _                       
 __|  | ___  ___  ___  _| |  | __  || | _ _  _____  ___  ___ 
|  |  || .'||  _|| -_|| . |  | __ -|| || | ||     || -_||  _|
|_____||__,||_|  |___||___|  |_____||_||___||_|_|_||___||_| 
`}
            </PreName>
            <PreNameMobile>
                {String.raw`
    __                   _      
 __|  | ___  ___  ___  _| |     
|  |  || .'||  _|| -_|| . |     
|_____||__,||_|  |___||___|     
 _____  _                       
| __  || | _ _  _____  ___  ___ 
| __ -|| || | ||     || -_||  _|
|_____||_||___||_|_|_||___||_|  
`}
            </PreNameMobile>

            <p>
                Welcome to my terminal portfolio! Type <Highlight>help</Highlight> to see a list of commands.
            </p>
            <p>Curious how this was built? View the source code on <Link href="https://github.com/jaredblumer/terminal-portfolio" target="_blank">GitHub</Link>.</p>
        </HelloContainer>
    );
};
