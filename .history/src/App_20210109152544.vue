<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '/@/components/HelloWorld.vue'

export default {
  name: 'App',
  setup() {
    console.log(11)
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
