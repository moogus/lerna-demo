module.exports = {
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },

  globals: {
    __SERVER__: true,
  },

  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/**/*.spec.ts'],

  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['node_modules'],

  collectCoverageFrom: ['<rootDir>/**/*.ts', '<rootDir>/**/*.tsx'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
