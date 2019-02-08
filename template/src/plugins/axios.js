import axios from 'axios'
import config from '@/config.js'

const rainbow = [
  'color: #e74c3c',
  'color: #e67e22',
  'color: #f1c40f',
  'color: #2ecc71',
  'color: #1abc9c',
  'color: #3498db',
  'color: #9b59b6',
  'color: #333'
]
const print = val => {
  console.log('%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c ' + val, ...rainbow)
}
const groupStart = val => {
  console.group('%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c>>>%c ' + val, ...rainbow)
}
const printError = response => {
  if (process.env.NODE_ENV === 'development') {
    groupStart('出错了哦')
    console.log(
      response.config.method.toUpperCase() + ' ' + response.config.url
    )
    if (response.config.headers[config.axios.header.token]) {
      console.log('%c>>>>>> token ok', 'color: #2ecc71')
    }
    if (response.config.data) {
      console.log('%c↓↓↓↓↓↓ payload', 'color: #e67e22')
      console.table(JSON.parse(response.config.data))
    }
    console.log(response.data.err)
    console.log(response.data.msg)
    console.groupEnd()
  }
}
const printList = response => {
  if (process.env.NODE_ENV === 'development') {
    console.group(
      '%c>>>>>> ' +
        response.config.method.toUpperCase() +
        ' ' +
        response.config.url,
      'color: #e67e22'
    )
    if (response.config.headers[config.axios.header.token]) {
      console.log('%c>>>>>> token ok', 'color: #2ecc71')
    }
    if (response.config.params) {
      console.log('%c↓↓↓↓↓↓ query params', 'color: #e67e22')
      console.table(response.config.params)
    }
    if (response.config.data) {
      console.log('%c↓↓↓↓↓↓ request payload', 'color: #e67e22')
      console.table(JSON.parse(response.config.data))
    }
    console.log('%c↓↓↓↓↓↓ response page', 'color: #3498db')
    console.table(response.data.page)
  }
  console.log('%c↓↓↓↓↓↓ response list', 'color: #3498db')
  console.table(response.data.list)
  console.groupEnd()
}
const printData = response => {
  if (process.env.NODE_ENV === 'development') {
    console.group(
      '%c>>>>>> ' +
        response.config.method.toUpperCase() +
        ' ' +
        response.config.url,
      'color: #e67e22'
    )
    if (response.config.headers[config.axios.header.token]) {
      console.log('%c>>>>>> token ok', 'color: #2ecc71')
    }
    if (response.config.params) {
      console.log('%c↓↓↓↓↓↓ query params', 'color: #e67e22')
      console.log(response.config.params)
    }
    if (response.config.data) {
      console.log('%c↓↓↓↓↓↓ request payload', 'color: #e67e22')
      console.table(JSON.parse(response.config.data))
    }
    console.log('%c↓↓↓↓↓↓ response data', 'color: #3498db')
    console.table(response.data.data)
    console.groupEnd()
  }
}

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? config.axios.baseURL.dev
    : config.axios.baseURL.pro
axios.defaults.headers.common['X-Powered-By'] = config.axios.pwoeredBy
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'x-refresh-token'
axios.defaults.withCredentials = false

axios.interceptors.request.use(
  option => {
    if (localStorage.getItem('token')) {
      option.headers[config.axios.header.token] = localStorage.getItem('token')
    }
    return option
  },
  err => {
    console.log('error')
    console.log(err)
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    let newToken = response.headers[config.axios.header.tokenRefresh]
    if (newToken) {
      groupStart()
      console.log('got refresh token signal>>>>>>')
      localStorage.setItem('token', newToken)
      console.log('update token ok>>>>>>')
      console.groupEnd()
    }
    if (response.data.err && response.data.err != 0) {
      printError(response)
      return Promise.reject(response.data)
    } else {
      if (response.data.page) {
        printList(response)
        return Promise.resolve(response.data)
      } else {
        printData(response)
        return Promise.resolve(response.data.data)
      }
    }
  },
  error => {
    if (error.response.status == 401) {
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default axios
