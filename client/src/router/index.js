import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '../components/LoginForm'
import ErrorPage from '../components/ErrorPage'
import ManagerPage from '../components/ManagerPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/admin',
      name: 'ManagerPage',
      component: ManagerPage
    }
  ]
})

export default router;