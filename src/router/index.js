import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/findvin',
    name: 'FindVin',
    // route level code-splitting
    component: () => import(/* webpackChunkName: "FindVin" */ '../views/FindVin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
