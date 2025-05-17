jest.mock('next/font/google', () => ({
    Ubuntu_Mono: () => ({ className: 'mocked-font' }),
}));

window.HTMLElement.prototype.scrollIntoView = jest.fn();
