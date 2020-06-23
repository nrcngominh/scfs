import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ErrorPage from '../pages/ErrorPage'
import LayoutPage from '../pages/Layout'
import HomePage from '../pages/HomePage'
import CheckoutPage from '../pages/CheckoutPage.vue'
import VendorPage from '../pages/VendorPage.vue'
import PaymentPage from '../pages/PaymentPage.vue'
import TransactionPage from '../pages/TransactionPage.vue'


axios.defaults.baseURL = process.env.VUE_APP_DOMAIN || 'http://localhost/'
Vue.prototype.$http = axios

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'LayoutPage',
            component: LayoutPage,
            children: [{
                    path: '',
                    name: 'HomePage',
                    component: HomePage,
                    meta: {
                        title: 'BK Food | Home'
                    }
                },
                {
                    path: 'checkout',
                    name: 'CheckoutPage',
                    component: CheckoutPage,
                    meta: {
                        title: 'BK Food | Checkout'
                    }
                },
                {
                    path: 'payment',
                    name: 'PaymentPage',
                    component: PaymentPage,
                    meta: {
                        title: 'BK Food | Payment'
                    }
                },
            ]
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage,
            meta: {
                title: 'BK Food | Login'
            }
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage,
            meta: {
                title: 'BK Food | Register'
            }
        },
        {
            path: '/error',
            name: 'ErrorPage',
            component: ErrorPage
        },
        {
            path: '/vendor',
            name: 'VendorPage',
            component: VendorPage,
            meta: {
                title: 'BK Food | Vendor'
            }
        },
        {
            path: '/transaction',
            name: 'TransactionPage',
            component: TransactionPage,
            meta: {
                title: 'BK Food | Transaction'
            }
        },
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    axios.defaults.headers['x-access-token'] = Vue.$cookies.get('accessToken')
    next()
})
export default router;