<template lang="pug">
.hello
  h1 Welcome to your vue.js app!
  p 按下'Alt + Q'组合键可以打开顶部导航，方便开发环境使用
  h3 预设的页面
  ul
    li
      router-link(to="/") Home
    li
      router-link(to="/about") About
    li
      router-link(to="/default") Default
  h3 内置的插件
  ul
    li
      a(target="_blank" href="https://router.vuejs.org/") vue-router
    li
      a(target="_blank" href="https://vuex.vuejs.org/") vuex
    li
      a(target="_blank" href="http://lesscss.org/") less
    li
      a(target="_blank" href="https://pugjs.org") pug
    li
      a(target="_blank" href="https://github.com/axios/axios") axios
    li
      a(target="_blank" href="https://github.com/ktsn/vue-cli-plugin-auto-routing") auto-routing
    li
      a(target="_blank" href="https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader") style-resources-loader
<%_ if(options['ui-framework']==='element-ui') { _%>
    li
      a(target="_blank" href="http://element-cn.eleme.io") element-ui
<%_ } else if(options['ui-framework']==='iview') { _%>
    li
      a(target="_blank" href="https://www.iviewui.com") iview
<%_ } _%>

</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
