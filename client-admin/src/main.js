// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

import routes from "./routes";
import store from "./store";
import "material-design-icons/iconfont/material-icons.css";
import MaterialDashboard from "./material-dashboard";
import "@/assets/scss/index.scss";

import Chartist from "chartist";

Vue.prototype.$Chartist = Chartist;
Vue.use(MaterialDashboard);

const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
});

import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN || 'http://localhost/'

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
