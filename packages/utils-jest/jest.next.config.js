module.exports = {
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'kits-utils-jest/fileMock.js',
  },

  globals: {
    __SERVER__: true,
  },

  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
    '^.+\\.css$': '@ng-light/utils-jest/styleTransForm.js',
  },

  roots: ['<rootDir>'],
  testMatch: [
    '<rootDir>/__tests__/**/*.spec.ts',
    '<rootDir>/__tests__/**/*.spec.tsx',
  ],

  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['node_modules'],
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  collectCoverageFrom: [
    '<rootDir>/__tests__/**/*.ts',
    '<rootDir>/__tests__/**/*.tsx',
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
