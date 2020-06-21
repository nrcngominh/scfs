import Vue from "vue";
import VueRouter from "vue-router";

import "@/pages";
import DashboardLayout from "@/layouts/DashboardLayout";

import { AccountService } from "@/services";
import {
  Dashboard,
  ProfilePage,
  AboutPage,
  NotificationPage,
  LoginPage
} from "../pages";

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
      },
      {
        path: "profile",
        name: "Profile",
        component: ProfilePage
      },
      {
        path: "notification",
        name: "Notification",
        component: NotificationPage
      },
      {
        path: "about",
        name: "About",
        component: AboutPage
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
