import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HomePage',
            component: HomePage,
            meta: {
                title: 'BK Food | Home'
            }
        }, {
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
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router;
