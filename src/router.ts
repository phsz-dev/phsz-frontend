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
          // 传入/就是跳转到intro页面
          {
            path: 'intro',
            name: 'CaseDetailIntro',
            component: () => import('./components/PHCaseDetailIntro.vue')
          },
          {
            path: 'medicine',
            name: 'CaseDetailMedicine',
            component: () => import('./components/PHCaseDetailMedicine.vue')
          },
          {
            path: 'vaccine',
            name: 'CaseDetailVaccine',
            component: () => import('./components/PHCaseDetailVaccine.vue')
          },
          {
            path: 'charge',
            name: 'CaseDetailCharge',
            component: () => import('./components/PHCaseDetailCharge.vue')
          },
          {
            path: 'assay',
            name: 'CaseDetailAssay',
            component: () => import('./components/PHCaseDetailAssay.vue')
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
        component: () => import('./views/Profile.vue'),
        children: [
          {
            path: '',
            name: 'ProfileBasic',
            component: () => import('./components/PHProfileBasic.vue')
          },
          {
            path: 'collect-case',
            name: 'ProfileCollectCase',
            component: () => import('./components/PHProfileCollectCase.vue')
          },
          {
            path: 'my-exams',
            name: 'ProfileMyExam',
            component: () => import('./components/PHProfileTest.vue')
          }
        ]
      },
      {
        path: 'paper-selection',
        name: 'PaperSelection',
        component: () => import('./views/PaperSelection.vue')
      },
      {
        path: 'paper-details/:id',
        name: 'PaperDetails',
        component: () => import('./views/PaperDetails.vue')
      },
      {
        path: 'test/:id',
        name: 'Test',
        component: () => import('./views/Test.vue')
      },
      {
        path: 'test-result/:id',
        name: 'TestResult',
        component: () => import('./views/TestResult.vue')
      },
      {
        path: 'admin-dashboard',
        name: 'AdminDashboard',
        component: () => import('./views/AdminDashboard.vue'),
        children: [
          {
            path: 'user-management',
            name: 'UserManagement',
            component: () => import('./components/PHUserManagement.vue')
          },
          {
            path: 'assay-management',
            name: 'AssayManagement',
            component: () => import('./components/PHAssayManagement.vue')
          },
          {
            path: 'medicine-management',
            name: 'MedicineManagement',
            component: () => import('./components/PHMedicineManagement.vue')
          },
          {
            path: 'vaccine-management',
            name: 'VaccineManagement',
            component: () => import('./components/PHVaccineManagement.vue')
          },
          {
            path: 'charge-management',
            name: 'ChargeManagement',
            component: () => import('./components/PHChargeManagement.vue')
          },
          {
            path: 'case-management',
            name: 'CaseManagement',
            component: () => import('./components/PHCaseManagement.vue')
          }
        ]
      },
      {
        path: 'medicine/:id',
        name: 'Medicine',
        component: () => import('./views/MedicineDetail.vue')
      },
      {
        path: 'vaccine/:id',
        name: 'Vaccine',
        component: () => import('./views/VaccineDetail.vue')
      },
      {
        path: 'assay/:id',
        name: 'Assay',
        component: () => import('./views/AssayDetail.vue')
      },
      {
        path: 'message-test',
        name: 'MessageTest',
        component: () => import('./views/PHMessageTest.vue')
      },
      {
        path: 'case-revise/:id',
        name: 'CaseRevise',
        component: () => import('./views/CaseRevise.vue')
      },
      {
        path: '3d-navigation-inner/:id',
        name: '3dNavigationInner',
        component: () => import('./views/3DNavigationInner.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
