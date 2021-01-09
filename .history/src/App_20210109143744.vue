<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '/@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style scoped>
.box {
  width: 200px;
  border: 1px solid red;
}
</style>

<style lang="scss" scoped>
.box {
  width: 200px;
  border: 1px solid red;
}
</style>
