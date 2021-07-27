/* eslint-disable */

const debug = process?.env?.NODE_ENV === 'development'

const withTM = require('next-transpile-modules')([], { debug })

module.exports = withTM({
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/'
      },
      {
        source: '/product/:productId*',
        destination: 'http://localhost:3001/product/:productId*'
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
