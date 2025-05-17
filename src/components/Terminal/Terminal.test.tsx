import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Terminal from './Terminal';

describe('Terminal component', () => {
    const getInput = () => screen.getByLabelText('Terminal input');
    const typeCommand = async (command: string) => {
        await userEvent.type(getInput(), `${command}{enter}`);
    };

    beforeEach(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        render(<Terminal />);
    });

    describe('initial render', () => {
        test('displays hello and welcome message', () => {
            expect(screen.getByText(/hello/i)).toBeInTheDocument();
            expect(screen.getByText(/welcome/i)).toBeInTheDocument();
        });

        test('autofocuses the input', () => {
            expect(getInput()).toHaveFocus();
        });

        test('includes a GitHub portfolio link', () => {
            const link = screen.getByText(/github/i);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', 'https://github.com/jaredblumer/terminal-portfolio');
            expect(link).toHaveAttribute('target', '_blank');
        });
    });

    describe('command behavior', () => {
        test('responds to "about" with bio', async () => {
            await typeCommand('about');
            expect(screen.getByText(/jared blumer/i)).toBeInTheDocument();
        });

        test('responds to "certifications"', async () => {
            await typeCommand('certifications');
            expect(screen.getByText(/aws certified solutions architect/i)).toBeInTheDocument();
        });

        test('responds to "education"', async () => {
            await typeCommand('education');
            expect(screen.getByText(/penn state university/i)).toBeInTheDocument();
        });

        test('responds to "email"', async () => {
            await typeCommand('email');
            const link = screen.getByRole('link', { name: /jaredblumer/i });
            expect(link).toHaveAttribute('href', 'mailto:jaredblumer@protonmail.com');
        });

        test('responds to "github"', async () => {
            await typeCommand('github');
            const link = screen.getByRole('link', { name: /github\.com/i });
            expect(link).toHaveAttribute('href', 'https://github.com/jaredblumer/');
        });

        test('responds to "linkedin"', async () => {
            await typeCommand('linkedin');
            const link = screen.getByRole('link', { name: /linkedin\.com/i });
            expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/jaredblumer/');
        });

        test('responds to "help" with list of commands', async () => {
            await typeCommand('help');
            expect(screen.getByText(/list available commands/i)).toBeInTheDocument();
        });

        test('responds to "hello" manually entered after clearing', async () => {
            await typeCommand('clear');
            expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
            await typeCommand('hello');
            expect(screen.getByText(/welcome to my terminal portfolio/i)).toBeInTheDocument();
        });

        test('responds to "portfolio" with project list', async () => {
            await typeCommand('portfolio');
            expect(screen.getAllByText(/happeni/i).length).toBeGreaterThan(0);
            expect(screen.getAllByText(/freemodoro/i).length).toBeGreaterThan(0);
        });

        test('clears output with "clear" command', async () => {
            await typeCommand('clear');
            expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
        });

        test('clears output with Ctrl+L', () => {
            expect(screen.getByText(/hello/i)).toBeInTheDocument();
            fireEvent.keyDown(document, { key: 'l', ctrlKey: true });
            expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
        });

        test('displays "command not found" with invalid command', async () => {
            await typeCommand('command');
            expect(screen.queryByText(/comand not found:/i)).not.toBeInTheDocument();
        });

        test('scrolls to bottom on new command', async () => {
            await typeCommand('help');
            expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
        });
    });
});
