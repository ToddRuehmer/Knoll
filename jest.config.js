// jest.config.js
module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: 'jsdom',
    //setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    coverageReporters: ['lcov', 'text'],
};