'use client';

import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
`;

export const Input = styled.input`
    background-color: #2d0922;
    border: none;
    box-sizing: border-box;
    color: white;
    flex: 1;
    flex-grow: 1;
    font-family: sans-serif;
    font-size: 1rem;
    padding: 0;
    width: 100%;

    &:hover,
    &:focus {
        outline: none;
        box-shadow: none;
        border-color: inherit;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1rem;
`;