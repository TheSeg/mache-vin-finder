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
    name: 'find-vin',
    component: () => import(/* webpackChunkName: "FindVin" */ '../views/FindVin.vue')
  },
  {
    path: '/show',
    name: 'show-vin',
    component: () => import(/* webpackChunkName: "ShowVin" */ '../views/ShowVin.vue')
  },
  {
    path: '/details',
    name: 'vin-details',
    component: () => import(/* webpackChunkName: "VinDetails" */ '../views/VinDetails.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
