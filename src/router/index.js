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

    ]
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
