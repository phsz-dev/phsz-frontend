import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from './views/Home.vue'
import RoleSelect from './views/RoleSelect.vue'
import CaseStudy from './views/CaseStudy.vue'

const routes = [
  {
    path: '/',
    component: RouterView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'role-select',
        name: 'RoleSelect',
        component: RoleSelect
      },
      {
        path: 'case-study',
        name: 'CaseStudy',
        component: CaseStudy
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
