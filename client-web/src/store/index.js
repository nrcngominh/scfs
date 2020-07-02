import Vue from "vue";
import Vuex from "vuex";
import Header from './header'
import Account from './account'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    header: Header,
    account: Account
  }
});

export default store;