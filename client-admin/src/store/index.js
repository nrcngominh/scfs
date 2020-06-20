import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken: null,
    email: null,
    sidebarBackground: require("@/assets/img/sidebar-2.jpg"),
    sidebarColor: null
  },
  mutations: {
    login(state, payload) {
      (state.accessToken = payload.accessToken), (state.email = payload.email);
    },
    logout(state) {
      (state.accessToken = null), (state.email = null);
    },
    setSidebarBackground(state, image) {
      state.sidebarBackground = image;
    }
  }
});

export default store;
