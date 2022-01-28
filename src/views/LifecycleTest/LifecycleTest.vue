<template>
  <el-button type="primary" @click="changeParentStr">改变父组件内容</el-button>
  <h1>{{ `父组件字段：${parentStr}` }}</h1>
  <ChildLifecycleTestVue />
</template>

<script lang="ts" setup>
  import ChildLifecycleTestVue from './components/ChildLifecycleTest.vue'
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  const parentStr = ref('初始值')
  const changeParentStr = () => {
    parentStr.value = '改变后的值'
  }

  onBeforeMount(() => {
    console.log('父组件onBeforeMount')
  })

  onMounted(() => {
    console.log('父组件onMounted')
  })

  onBeforeUpdate(() => {
    console.log('父组件onBeforeUpdate')
  })

  onUpdated(() => {
    console.log('父组件onUpdated')
  })

  onBeforeUnmount(() => {
    console.log('父组件onBeforeUnmount')
  })

  onUnmounted(() => {
    console.log('父组件onUnmounted')
  })
</script>
