<template>
  <el-button type="primary" @click="changeParentStr">改变子组件内容</el-button>
  <h1>{{ `子组件字段：${parentStr}` }}</h1>
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  const parentStr = ref('初始值')
  const changeParentStr = () => {
    parentStr.value = '改变后的值'
  }

  onBeforeMount(() => {
    console.log('子组件onBeforeMount')
  })

  onMounted(() => {
    console.log('子组件onMounted')
  })

  onBeforeUpdate(() => {
    console.log('子组件onBeforeUpdate')
  })

  onUpdated(() => {
    console.log('子组件onUpdated')
  })

  onBeforeUnmount(() => {
    console.log('子组件onBeforeUnmount')
  })

  onUnmounted(() => {
    console.log('子组件onUnmounted')
  })
</script>
