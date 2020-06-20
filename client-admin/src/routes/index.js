import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/pages/LoginPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";

import { AccountService } from "@/services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    // beforeEnter: async (to, from, next) => {
    //   (await AccountService.auth()) ? next() : next("/login");
    // },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: async (to, from, next) => {
      (await AccountService.auth()) ? next("/") : next();
    }
  }
];

export default routes;
