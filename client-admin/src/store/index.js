import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    email: null,
    numOfNotifications: 0
  },
  mutations: {
    login(state, payload) {
      state.email = payload.email;
    },
    logout(state) {
      state.email = null;
    }
  }
});

export default store;
