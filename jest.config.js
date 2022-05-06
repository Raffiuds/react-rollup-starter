const fileMockPath = '<rootDir>/__mocks__/fileMock.ts';
const svgMockPath = '<rootDir>/__mocks__/svgMock.ts';

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  coverageReporters: ['lcovonly', 'text-summary'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '^react-swipeable$': fileMockPath,
    '^resize-observer-polyfill$': fileMockPath,
    '\\.svg': svgMockPath,
  },
};
