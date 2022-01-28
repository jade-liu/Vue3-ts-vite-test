<template>
  <a-layout class="layout-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed">
      <div style="padding: 10px 0; text-align: center">
        <menu-unfold-outlined v-if="collapsed" @click="openSiderbar" style="color: #fff; font-size: 16px" />
        <menu-fold-outlined v-else @click="closeSiderbar" style="color: #fff; font-size: 16px" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <a-menu-item v-for="item in routes" :key="item.name">
          <router-link :to="item.path">
            <Icon :icon="item.meta?.icon" />
            <span>{{ item.meta?.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-custom-trigger" />
      <a-layout-content class="content-custom-trigger">
        <div class="app-main">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { Icon } from './components/Icon/index'
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'

  const routes = computed(() => useRouter().options.routes)

  const selectedKeys = computed(() => [useRouter().currentRoute.value.name])

  const collapsed = ref(false)

  const openSiderbar = () => {
    collapsed.value = false
  }
  const closeSiderbar = () => {
    collapsed.value = true
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .layout-custom-trigger {
    height: 100vh;
    overflow: auto;
  }
  .header-custom-trigger {
    background: #fff;
    padding: 0 20px;
    line-height: 50px;
    height: 50px;
  }
  .content-custom-trigger {
    padding: 20px 16px;
    overflow: auto;
  }
  .app-main {
    padding: 20px;
    background: #fff;
    min-height: calc(100vh - 90px);
  }
</style>
