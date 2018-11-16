module.exports = [
  {
    name: 'ui-framework',
    type: 'list',
    message: 'choose UI Framework',
    choices: [
      {
        name: 'none',
        value: 'none'
      },
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'iView',
        value: 'iview'
      }
    ],
    default: 'none'
  }
]
