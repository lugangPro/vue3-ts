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
    },{
      path: '/index3',
      name: 'Main3',
      component: () => import('../views/main/test1.vue') 
    },{
      path: '/index4',
      name: 'Main4',
      component: () => import('../views/main/test2.vue') 
    },{
      path: '/index7',
      name: 'Main7',
      component: () => import('../views/main/test3.vue') 
    },{
      path: '/index8',
      name: 'Main8',
      component: () => import('../views/main/test4.vue') 
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
