import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/website/HomeView.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/website/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/website/AboutView.vue')
      }
    ]
  },

  {
    path: '/staff',
    component: () => import('../views/staff/Index.vue'),
    children: [
      {
        path: '/staff/dashboard',
        name: 'staff-dashboard',
        component: () => import('../views/staff/Dashboard.vue'),
      },
      {
        path: '/staff/members',
        name: 'member',
        component: () => import('../views/staff/member/ManageMember.vue'),
      },
      {
        path: '/staff/members/create',
        name: 'member-create',
        component: () => import('../views/staff/member/CreateMember.vue'),
      },


    ]
  },
  //staff-login
  {
    path: '/staff/login',
    name: 'staff-login',
    component: () => import('../views/staff/LoginStaff.vue')
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active"
})

export default router
