import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from '@/pages/LoginPage'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login Page",
      component: LoginPage,
    }
  ]
})
export default router;