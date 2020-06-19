import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import AccountService from '../services/account-service'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
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
