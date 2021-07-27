/* eslint-disable */

const debug = process?.env?.NODE_ENV === 'development'

const withTM = require('next-transpile-modules')([], { debug })

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
    }
    config.module.rules.push({
      test: /\.spec.ts$/,
      loader: 'ignore-loader',
    })
    return config
  },
})
