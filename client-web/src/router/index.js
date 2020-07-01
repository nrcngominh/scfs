import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/LandingPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main Layout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Landing Page',
          component: LandingPage,
          meta: {
            title: 'BK Food | Home'
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  Vue.prototype.$http.defaults.headers['x-access-token'] = Vue.$cookies.get('accessToken')
  next()
})
export default router;