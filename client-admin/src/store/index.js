import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken: null,
    email: null,
    numOfNotifications: 0
  },
  mutations: {
    login(state, payload) {
      (state.accessToken = payload.accessToken), (state.email = payload.email);
    },
    logout(state) {
      (state.accessToken = null), (state.email = null);
    }
  }
});

export default store;
