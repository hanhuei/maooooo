<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    console.log(aa)
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
