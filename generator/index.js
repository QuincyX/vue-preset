module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api)
  api.render('../template')
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      nprogress: '^0.2.0',
      'normalize.css': '^8.0.1'
    },
    vue: {
      css: {
        sourceMap: true
      },
      pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: ['./src/style/mixin.less', './src/style/theme.less']
        }
      }
    }
  })
  if (options['ui-framework'] === 'element-ui') {
    require('./element.js')(api, options)
  } else if (options['ui-framework'] === 'iview') {
    require('./iview.js')(api, options)
  }
  api.onCreateComplete(() => {
    utils.deleteFile('./src/store.js')
    utils.deleteDir('./src/views')
  })
}
