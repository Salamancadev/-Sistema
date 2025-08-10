import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { 
    path: '/dashboard', 
    component: DashboardView,
    beforeEnter: (to, from, next) => {
      const auth = localStorage.getItem('auth')
      if (auth === 'true') next()
      else next('/login')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router