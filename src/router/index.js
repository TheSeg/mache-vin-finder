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
    component: () => import(/* webpackChunkName: "FindVin" */ '../views/FindVin.vue')
  },
  {
    path: '/show',
    name: 'ShowVin',
    component: () => import(/* webpackChunkName: "ShowVin" */ '../views/ShowVin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
