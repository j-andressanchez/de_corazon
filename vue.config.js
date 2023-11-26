const { defineConfig } = require('@vue/cli-service')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/gist': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: { '^/gist': '/gists' },
      },
    },
  },
})
