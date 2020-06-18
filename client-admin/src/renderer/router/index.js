import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
  ]
})

export default router;
