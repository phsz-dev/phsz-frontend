import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router