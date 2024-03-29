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
        path: 'role-select',
        name: 'RoleSelect',
        component: () => import('./views/RoleSelect.vue')
      },
      {
        path: 'role-select-learn/:id',
        name: 'RoleDetail',
        component: () => import('./views/RoleSelectLearn.vue')
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
