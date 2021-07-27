const base = require('./eslint.base')
const overrides = base.overrides[0]

module.exports = {
  ...base,
  ignorePatterns: ['node_modules/*', '.next/*'],
  overrides: [
    {
      ...overrides,
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        ...overrides.extends,
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        ...overrides.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
}
