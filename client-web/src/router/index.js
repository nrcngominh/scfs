import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/LandingPage'

// import LoginPage from '../pages/LoginPage'
// import RegisterPage from '../pages/RegisterPage'
// import ErrorPage from '../pages/ErrorPage'
// import LayoutPage from '../pages/Layout'
// import HomePage from '../pages/HomePage'
// import CheckoutPage from '../pages/CheckoutPage'
// import VendorPage from '../pages/VendorPage'
// import PaymentPage from '../pages/PaymentPage'
// import TransactionPage from '../pages/TransactionPage'
// import DetailTransaction from '../pages/DetailTransaction'
// import MomoPage from '../pages/MomoPage'

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
        },
        // {
        //     path: '/',
        //     name: 'LayoutPage',
        //     component: LayoutPage,
        //     children: [{
        //             path: '',
        //             name: 'HomePage',
        //             component: HomePage,
        //             meta: {
        //                 title: 'BK Food | Home'
        //             }
        //         },
        //         {
        //             path: 'checkout',
        //             name: 'CheckoutPage',
        //             component: CheckoutPage,
        //             meta: {
        //                 title: 'BK Food | Checkout'
        //             }
        //         },
        //         {
        //             path: 'payment',
        //             name: 'PaymentPage',
        //             component: PaymentPage,
        //             meta: {
        //                 title: 'BK Food | Payment'
        //             }
        //         },
        //         {
        //             path: 'transaction',
        //             name: 'TransactionPage',
        //             component: TransactionPage,
        //             meta: {
        //                 title: 'BK Food | Transaction'
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/login',
        //     name: 'LoginPage',
        //     component: LoginPage,
        //     meta: {
        //         title: 'BK Food | Login'
        //     }
        // },
        // {
        //     path: '/register',
        //     name: 'RegisterPage',
        //     component: RegisterPage,
        //     meta: {
        //         title: 'BK Food | Register'
        //     }
        // },
        // {
        //     path: '/error',
        //     name: 'ErrorPage',
        //     component: ErrorPage
        // },
        // {
        //     path: '/vendor',
        //     name: 'VendorPage',
        //     component: VendorPage,
        //     meta: {
        //         title: 'BK Food | Vendor'
        //     }
        // },
        // {
        //     path: '/momo',
        //     name: 'MomoPage',
        //     component: MomoPage,
        //     meta: {
        //         title: 'MOMO Fake Server Dashboard'
        //     }
        // },
        // {
        //     path: '/detail-transaction/:billId',
        //     name: 'DetailTransaction',
        //     component: DetailTransaction,
        //     meta: {
        //         title: 'BK Food | Detail Transaction'
        //     }
        // },
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    Vue.prototype.$http.defaults.headers['x-access-token'] = Vue.$cookies.get('accessToken')
    next()
})
export default router;