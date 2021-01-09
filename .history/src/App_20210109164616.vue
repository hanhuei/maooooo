<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from '/@/store'
export default {
  name: 'App',
  setup() {
    console.log(store)
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
