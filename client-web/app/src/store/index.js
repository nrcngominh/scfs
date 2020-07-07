import Vue from "vue";
import Vuex from "vuex";
import Customer from './customer'
import Vendor from './vendor'
import AccountModal from './account-modal'

Vue.use(Vuex);

const store = new Vuex.Store({
  namspaced: true,
  modules: {
    customer: Customer,
    vendor: Vendor,
    accountModal: AccountModal,
  },
  actions: {
    SOCKET_MOMO(data) {
      console.log(data)
    }
  }
});

export default store;