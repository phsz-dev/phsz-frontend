import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
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
        path: 'case-study-detail/:id',
        name: 'CaseStudyDetail',
        component: () => import('./views/CaseStudyDetail.vue')
      },
      {
        path: 'case-detail/:id',
        name: 'CaseDetail',
        component: () => import('./views/CaseDetail.vue'),
        children: [
          {
            path: '/',
            name: 'CaseDetailIntro',
            component: () => import('./components/PHCaseDetailIntro.vue')
          }
        ]
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('./views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('./views/Register.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('./views/Profile.vue')
      },
      {
        path: 'test-selection',
        name: 'TestSelection',
        component: () => import('./views/TestSelection.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
