import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from './views/Home.vue'
import RoleSelect from './views/RoleSelect.vue'

const routes = [
  {
    path: '/',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/role',
        name: 'RoleSelect',
        component: RoleSelect
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router