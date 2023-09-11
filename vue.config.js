const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 配置跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 设置目标接口的基础 URL
        changeOrigin: true, // 是否改变源地址
        pathRewrite: {
          '^/api': '' // 重写路径，将请求路径中的 '/api' 替换为空字符串
        }
      }
    }
  }
})
