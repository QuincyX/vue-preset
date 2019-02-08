export default {
  axios: {
    baseURL: {
      dev: 'http://127.0.0.1:3000/api/v1/',
      pro: 'http://api.test.cn/',
      upload: 'http://api.test.cn/upload'
    },
    header: {
      token: 'x-test-token',
      tokenRefresh: 'x-new-token'
    },
    pwoeredBy: 'likequincy@outlook.com'
  }
}
