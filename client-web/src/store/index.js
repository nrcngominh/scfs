import Vue from "vue";
import Vuex from "vuex";
import Header from './header'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    header: Header
  }
});

export default store;