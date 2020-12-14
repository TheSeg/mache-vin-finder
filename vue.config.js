module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_bootstrap.scss";'
      }
    }
  },
  devServer: {
    compress: true
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
