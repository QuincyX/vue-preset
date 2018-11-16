const fs = require('fs')
const path = require('path')

module.exports = api => {
  return {
    updatePattern() {
      const vueConfig = api.resolve('./vue.config.js')
      let newData = fs
        .readFileSync(vueConfig, { encoding: 'utf-8' })
        .replace(
          'module.exports = {',
          `const path = require('path')

module.exports = {`
        )
        .replace(
          'patterns: []',
          `patterns: [
        path.join(__dirname,"src/style/theme.less"),
        path.join(__dirname,"src/style/mixin.less"),
      ]`
        )
      fs.writeFileSync(vueConfig, newData)
    },
    deleteFile(path) {
      const file = api.resolve(path)
      if (fs.existsSync(file)) {
        fs.unlinkSync(file)
      }
    },
    deleteDir(path) {
      const dir = api.resolve(path)
      if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(o => {
          const file = dir + '\\' + o
          if (fs.statSync(file).isDirectory()) {
            fs.readdirSync(dir).forEach(p => {
              fs.unlinkSync(dir + '\\' + o + '\\' + p)
            })
          } else {
            fs.unlinkSync(file)
          }
        })
        fs.rmdirSync(dir)
      }
    }
  }
}
