'use strict'

import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN"
axios.defaults.headers.common['X-Powered-By'] = 'likequincy@outlook.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = false

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log('error')
    console.log(err)
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    if (response.data.code && response.data.code != 0) {
      console.log('%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>', 'color: #e74c3c', 'color: #e67e22', 'color: #f1c40f', 'color: #2ecc71', 'color: #1abc9c', 'color: #3498db', 'color: #9b59b6')
      console.log('出错了哦，' + response.data.msg)
      return Promise.reject(response.data)
    } else {
      return Promise.resolve(response.data)
    }
  },
  error => {
    console.log('%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>', 'color: #e74c3c', 'color: #e67e22', 'color: #f1c40f', 'color: #2ecc71', 'color: #1abc9c', 'color: #3498db', 'color: #9b59b6')
    console.log(error.response)
    return Promise.reject(error)
  }
)


Plugin.install = function(Vue, options) {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },
    $axios: {
      get() {
        return axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
