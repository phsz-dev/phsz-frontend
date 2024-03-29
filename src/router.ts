import { createRouter, createWebHistory, RouterView } from 'vue-router'

const routes = [
  {
    path: '/',
    component: RouterView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('./views/Home.vue')
      },
      {
        path: 'hospital-navigation',
        name: 'HospitalNavigation',
        component: () => import('./views/HospitalNavigation.vue')
      },
      {
        path: '3d-navigation',
        name: '3DNavigation',
        component: () => import('./views/3DNavigation.vue')
      },
      {
        path: 'role-select',
        name: 'RoleSelect',
        component: () => import('./views/RoleSelect.vue')
      },
      {
        path: 'case-study',
        name: 'CaseStudy',
        component: () => import('./views/CaseStudy.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('./views/Login.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('./views/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
