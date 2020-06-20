import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import AccountService from '../services/account-service'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: async (to, from, next) => {
        await AccountService.auth() ? next() : next('/login')
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: async (to, from, next) => {
        await AccountService.auth() ? next('/') : next()
      }
    }
  ]
})

export default router;
