<template lang="pug">
.container
  .section.home
    img(src="../assets/logo.png")
    HelloWorld

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
.home {
  .center;
  .size(24px);
  padding: 60px 0;
}
</style>

