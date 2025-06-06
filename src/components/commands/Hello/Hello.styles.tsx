'use client';

import styled from 'styled-components';

export const HelloContainer = styled.div`
    p {
    }
`;

export const Highlight = styled.span`
    color:  #6F9CC4;
`;

export const Link = styled.a`
    color:  #6F9CC4;

    &:hover {
        text-decoration: none;
    }
`;

export const PreName = styled.pre`
    margin-top: -1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const PreNameMobile = styled.pre`
    margin-top: -1rem;
    margin-bottom: 1.5rem;

    @media (min-width: 700px) {
        display: none;
    }
`;
