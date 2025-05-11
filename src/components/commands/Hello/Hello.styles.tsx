'use client';

import styled from 'styled-components';

export const HelloContainer = styled.div`
    p {
    }
`;

export const Highlight = styled.span`
    color: #6e91b1;
`;

export const Link = styled.a`
    color: #6e91b1;

    &:hover {
        text-decoration: none;
    }
`;

export const PreName = styled.pre`
    margin-top: -1rem;
    margin-bottom: 0;

    @media (max-width: 550px) {
        display: none;
    }
`;

export const PreNameMobile = styled.pre`
    margin-top: -1rem;
    margin-bottom: 0;

    @media (min-width: 550px) {
        display: none;
    }
`;
