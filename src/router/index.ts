import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/index',
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/index',
      name: 'Main',
      component: () => import('../views/main/index.vue') 
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
