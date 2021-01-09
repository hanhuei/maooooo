<template>
  <div id="app">
    <TestCom></TestCom>
  </div>
</template>

<script>
import moduleName from '/@/components/test.vue';

export default {
  name: 'App',
  components: { TestCom },
  setup() {}
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
