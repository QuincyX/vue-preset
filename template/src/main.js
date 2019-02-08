import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/index'
import * as filters from './utils/filters'
import * as directives from './utils/directives'
import './style/global.less'
import './style/reset.less'
import 'nprogress/nprogress.css'
import 'normalize.css'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
