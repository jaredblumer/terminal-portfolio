'use client';

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 1rem;
`;

export const Input = styled.input`
    background-color: #2d0922;
    border: none;
    box-sizing: border-box;
    color: white;
    flex: 1;
    width: 100%;

    &:hover,
    &:focus {
        outline: none;
        box-shadow: none;
        border-color: inherit; /* or your desired color */
    }
`;

export const Label = styled.label`
`;