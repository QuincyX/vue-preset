<template lang="pug">
.container
  .card
    p 计算机名称 #hostname
    p 操作系统平台 #platform
    p 操作系统类型 #type
    p 操作系统版本 #release
    p CPU #cpu
    p 系统内存 #totalmem
    p 用户信息 #userInfo
    p 用户目录 #homedir
    p 网络状态 #networkInterfaces

</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    async fetchData() {
      Promise.all([])
    }
  },
  created() {},
  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="less" scoped>
.card {
  .pd;
}
</style>
