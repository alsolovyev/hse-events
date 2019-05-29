module.exports = {
  // specify deployment folder
  // outputDir: 'hes-events',

  // specify sub-path
  // publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '/',

  // import sass globally
  css: { loaderOptions: { sass: { data: '@import "~@/assets/sass/app"' } } },
}
