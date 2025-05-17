import type { Config } from 'jest';

const config: Config = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!**/vendor/**'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        'package.json',
        'package-lock.json',
        'reportWebVitals.ts',
        'setupTests.ts',
        'src/app/layout.tsx',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: 'tsconfig.jest.json',
        }],
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
