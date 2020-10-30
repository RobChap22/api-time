import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery/:id',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/photoshow/:id',
    name: 'PhotoShow',
    component: () => import('../views/PhotoShow.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
