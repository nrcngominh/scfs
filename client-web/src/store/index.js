import Vue from "vue";
import Vuex from "vuex";
import Header from './header'
import Account from './account'
import Food from './food'
import Cart from './cart'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    header: Header,
    account: Account,
    food: Food,
    cart: Cart
  }
});

export default store;