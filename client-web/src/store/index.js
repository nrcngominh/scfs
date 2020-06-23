import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: [],
    foods: [],
    cart: [],
    totalMoneyAfterDiscount: 0,
    isReadyToPay: false,
    notifications: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },
    setFoods(state, foods) {
      state.foods = foods
    },
    setCart(state, cart) {
      state.cart = cart.map(item => {
        return {
          foodId: item.foodId,
          quantity: item.quantity
        }
      })
    },
    addToCart(state, foodId) {
      const itemExisted = (state.cart.find(item => {
        return item.foodId == foodId
      }))
      if (itemExisted) {
        itemExisted.quantity++
      } else {
        state.cart.push({
          foodId: foodId,
          quantity: 1
        })
      }
    },
    updateQuantity(state, payload) {
      const itemExisted = (state.cart.find(item => {
        return item.foodId == payload.foodId
      }))
      if (itemExisted) {
        itemExisted.quantity = payload.newQuantity
      }
    },
    removeItem(state, foodId) {
      state.cart = state.cart.filter(item => item.foodId != foodId)
    },
    updateTotalMoney(state, value) {
      state.totalMoneyAfterDiscount = value
    },
    readyToPay(state) {
      state.isReadyToPay = true
    }
  },
  actions: {
    SOCKET_PAYMENT_SUCCESS(state, arg) {
      const json = JSON.parse(arg)
      state.notifications.push({
        message: `Giao dịch ${json.billId} đã được thanh toán`,
        url: `/detail-transaction/${json.billId}`
      })
    }
  }
});

export default store;
