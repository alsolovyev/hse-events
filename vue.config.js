module.exports = {
  // specify deployment folder
  // outputDir: 'hes-events',

  // specify sub-path
  // publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '/',

  // Import svg files inline
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  // import sass globally
  css: { loaderOptions: { sass: { data: '@import "~@/assets/sass/app"' } } }
}
