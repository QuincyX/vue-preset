<template lang="pug">
.container
  .card
    p this is default page

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


