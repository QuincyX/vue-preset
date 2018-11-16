module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      iview: '^3.1.5'
    }
  })
  api.render('../ui/iview')
  api.injectImports('src/main.js', `import './plugins/iview.js'`)
  api.onCreateComplete(() => {})
}
