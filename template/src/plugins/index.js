import Vue from 'vue'
import axios from './axios'
// import './element.js'
// import 'quill/dist/quill.snow.css'

Object.defineProperties(Vue.prototype, {
  $http: {
    get() {
      return axios
    }
  }
})
