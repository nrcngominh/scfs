import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: {
        items: []
    },
    totalMoneyAfterDiscount: 0
  },
  mutations: {
    addToCart(state, payload) {
      const food = payload.food
      const itemExisted = (state.cart.items.find(item => {
        return item.food._id == food._id
      }))
      if (itemExisted) {
        itemExisted.quantity++
      } else {
        state.cart.items.push({
          food: food,
          quantity: 1
        })
      }
    },
    updateQuantity(state, payload) {
      const itemExisted = (state.cart.items.find(item => {
        return item.food._id == payload.foodId
      }))
      if (itemExisted) {
        itemExisted.quantity = payload.newQuantity
      }
    },
    removeItem(state, foodId) {
      state.cart.items = state.cart.items.filter(item => item.food._id != foodId)
    },
    updateTotalMoney(state, value) {
      state.totalMoneyAfterDiscount = value
    }
  }
});

export default store;
