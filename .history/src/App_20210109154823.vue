<template>
  <div id="app">
    <TestCom></TestCom>
  </div>
</template>

<script>
import TestCom from '/@/component/test'
export default {
  name: 'App',
  components: { TestCom },
  setup() {},
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
