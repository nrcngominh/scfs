import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '@/store'

import MainLayout from '@/layouts/MainLayout'
import LandingPage from '@/pages/LandingPage'
import CartPage from '@/pages/CartPage'
import MenuPage from '@/pages/MenuPage'
import PaymentPage from '@/pages/PaymentPage'

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
            title: 'BK Food | Home',
            auth: false
          }
        },
        {
          path: 'menu',
          name: 'Menu Page',
          component: MenuPage,
          meta: {
            title: 'BK Food | Menu',
            auth: false
          }
        },
        {
          path: 'cart',
          name: 'Cart Page',
          component: CartPage,
          meta: {
            title: 'BK Food | Cart',
            auth: true
          }
        },
        {
          path: 'payment',
          name: 'Payment Page',
          component: PaymentPage,
          meta: {
            title: 'BK Food | Payment',
            auth: true
          }
        }
      ]
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title
  const accessToken = Vue.$cookies.get('accessToken')
  axios.defaults.headers['x-access-token'] = accessToken
  await store.dispatch('account/auth')
  if (to.meta.auth && !store.state.account.loggedIn) {
    return next('/')
  }
  next()
})

export default router;