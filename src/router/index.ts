import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routerHistory = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard/index.vue'),
    meta: { title: '工作台', icon: 'DashboardOutlined' }
  },
  {
    path: '/lifecycleTest',
    name: 'LifecycleTest',
    component: () => import('@/views/LifecycleTest/LifecycleTest.vue'),
    meta: { title: '生命周期', icon: 'AndroidOutlined' }
  }
]
const router = createRouter({
  history: routerHistory,
  routes
})

export default router
