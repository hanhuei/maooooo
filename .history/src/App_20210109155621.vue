<template>
  <div id="app">
    <TestCom></TestCom>
  </div>
</template>

<script>
import TestCom from '/@/components/test.vue'
import { testFn } from '@/utils/index'
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
