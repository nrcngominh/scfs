import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ErrorPage from '../components/ErrorPage'
import ManagerPage from '../components/ManagerPage'
import CustomerPage from '../components/CustomerPage'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'LoginForm',
            component: LoginForm,
            meta: {
                title: 'BK Food | Login'
            }
        },
        {
            path: '/register',
            name: 'RegisterForm',
            component: RegisterForm,
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
            path: '/admin',
            name: 'ManagerPage',
            component: ManagerPage
        },
        {
            path: '/user',
            name: 'CustomerPage',
            component: CustomerPage,
            meta: {
                title: 'BK Food | Home'
            }
        },

    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router;