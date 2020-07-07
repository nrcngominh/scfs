import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import LoginService from '@/services/login'

import MainLayout from '@/layouts/MainLayout'
import VendorLayout from '@/layouts/VendorLayout'
import LandingPage from '@/pages/LandingPage'
import CartPage from '@/pages/CartPage'
import MenuPage from '@/pages/MenuPage'
import PaymentPage from '@/pages/PaymentPage'
import ErrorPage from '@/pages/ErrorPage'
import VendorPage from '@/pages/VendorPage'
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
    },
    {
      path: '/vendor',
      name: 'Vendor Layout',
      component: VendorLayout,
      children: [
        {
          path: '',
          name: 'Vendor Page',
          component: VendorPage,
          meta: {
            title: 'BK Food | Vendor',
            auth: false
          }
        }
      ]
    },
    {
      path: '/login/google',
      beforeEnter: async (to, from, next) => {
        await LoginService.customerGoogle(to.query.code)
        next('/')
      }
    },
    {
      path: '/error',
      name: 'Error Page',
      component: ErrorPage,
      meta: {
        title: 'BK Food | Error',
        auth: false
      }
    },
    {
      path: '*',
      redirect: '/error'
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title
  await store.dispatch('customer/account/auth')
  if (to.meta.auth) {
    if (!store.state.customer.account.loggedIn) {
      return next('/')
    }
  }
  next()
})

export default router;