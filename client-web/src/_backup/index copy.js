import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from '@/layouts/MainLayout'
import LandingPage from '@/pages/LandingPage'
import CartPage from '@/pages/CartPage'

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
        },
        {
          path: 'cart',
          name: 'Cart Page',
          component: CartPage,
          meta: {
            title: 'BK Food | Cart'
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  axios.defaults.headers['x-access-token'] = Vue.$cookies.get('accessToken')
  next()
})
export default router;