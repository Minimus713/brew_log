module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {'^.+\\.(ts|tsx)$': 'ts-jest'},
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/'
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
}