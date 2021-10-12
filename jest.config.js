/* eslint-disable @typescript-eslint/no-var-requires */
const tsPreset = require('ts-jest/jest-preset');
set = require('@shelf/jest-mongodb/jest-preset');

module.exports = {
  ...tsPreset,
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 80,
      statements: 80,
    },
  },
  coverageDirectory: 'test/coverage',
  coveragePathIgnorePatterns: ['node_modules', 'dist'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  setupFiles: ['./jest.setup.js', 'dotenv/config'],
};
