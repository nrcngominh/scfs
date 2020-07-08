import Vue from "vue";
import Vuex from "vuex";
import Header from './header'
import Account from './account'
import Customer from './customer'
import Vendor from './vendor'

Vue.use(Vuex);

const store = new Vuex.Store({
  namspaced: true,
  modules: {
    header: Header,
    account: Account,
    customer: Customer,
    vendor: Vendor
  },
  actions: {
    SOCKET_MOMO(context, data) {
      alert(JSON.stringify(data))
    }
  }
});

export default store;