<template lang="pug">
el-collapse-transition
  #devNav(v-show="showDevNav")
    .container
      .info {{currentPage}}
      .list
        router-link(v-for="i in pageList" :key="i.link" :to="i.link") {{i.name}}

</template>

<script>
export default {
  data() {
    return {
      showDevNav: false,
      pageList: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Default', link: '/default' }
      ]
    }
  },
  computed: {
    currentPage() {
      return this.$route.name
    }
  },
  methods: {
    toggle() {
      this.showDevNav = !this.showDevNav
    }
  },
  created() {
    document.onkeydown = () => {
      if (window.event.altKey && window.event.keyCode == 81) {
        this.toggle()
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.showDevNav = true
      setTimeout(() => {
        this.showDevNav = false
      }, 2000)
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
#devNav {
  position: relative;
  background: @primary;
  color: hsla(0, 0%, 100%, 0.7);
  background-image: linear-gradient(90deg, #222325, #3b3c3f, #222325);
  .lh();
  .info {
    .inline;
    .center;
    .color-bg;
    .color(@white);
    width: 150px;
  }
  .list {
    .inline;
    a {
      .inline;
      .pointer;
      color: hsla(0, 0%, 100%, 0.7);
      padding: 0 30px;
      &.router-link-exact-active {
        color: #e5e5e5;
      }
      &:hover {
        background: @black;
      }
    }
  }
}
</style>
