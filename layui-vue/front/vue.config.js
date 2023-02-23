const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    resolve: {
      alias: {},
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [new NodePolyfillPlugin()]
  }
})
