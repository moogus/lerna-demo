/* eslint-disable */
const STYLED_ATOM_COMPONENTS = '@lerna-demo/components-styled-atoms'
const UTILS_TYPES = '@lerna-demo/utils-types'

const debug = process?.env?.NODE_ENV === 'development'

const withTM = require('next-transpile-modules')(
  [
    // component packages
    STYLED_ATOM_COMPONENTS,

    // utility packages
    UTILS_TYPES,
  ],
  { debug }
)

module.exports = withTM({
  basePath: '/product',
  async rewrites() {
    return [
      {
        source: '/home',
        destination: 'http://localhost:3000/home',
      },
    ]
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      [STYLED_ATOM_COMPONENTS]: require.resolve(STYLED_ATOM_COMPONENTS),

      // utility packages
      [UTILS_TYPES]: require.resolve(UTILS_TYPES),
    }
    config.module.rules.push({
      test: /\.spec.ts$/,
      loader: 'ignore-loader',
    })
    return config
  },
})
