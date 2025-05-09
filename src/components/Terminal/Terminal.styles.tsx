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
    flex-direction: column-reverse;
    padding: 1rem;
`;