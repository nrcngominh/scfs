import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

import "es6-promise/auto";

import SideBar from "./components/SidebarPlugin";
import Notifications from "./components/NotificationPlugin";
import DropDown from "./components/Dropdown.vue";
import { directive as vClickOutside } from "vue-clickaway";

export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(SideBar);
    Vue.use(Notifications);
    Vue.component("drop-down", DropDown);
    Vue.directive("click-outside", vClickOutside);
  }
};
