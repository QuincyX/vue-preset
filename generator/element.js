module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.4.5'
    },
    devDependencies: {
      'sass-loader': '^7.0.3',
      'node-sass': '^4.9.2'
    }
  })
  api.render('../ui/element')
  api.injectImports('src/plugins/index.js', `import './element.js'`)
  api.onCreateComplete(() => {})
}
