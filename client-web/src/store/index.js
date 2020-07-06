import Vue from "vue";
import Vuex from "vuex";
import Customer from './customer'
import Vendor from './vendor'

Vue.use(Vuex);

const store = new Vuex.Store({
  namspaced: true,
  modules: {
    customer: Customer,
    vendor: Vendor
  }
});

export default store;