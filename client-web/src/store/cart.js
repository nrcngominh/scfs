import { getCart, updateCart } from '@/api/cart'

const increaseQuantity = (item) => {
  item.quantity++;
  item.subTotal += item.food.price
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    item.subTotal -= item.food.price
  }
}

const addFoodToCart = (cart, food) => {
  const item = cart.find(item => {
    return item.food._id == food._id
  })
  item ? increaseQuantity(item) :
    cart.push({
      food: food,
      quantity: 1,
      subTotal: food.price
    })
}

const setSubTotal = (state) => {
  state.subTotal = state.cart.reduce((a, b) => a + b.subTotal, 0)
  state.total = state.subTotal
}

export default {
  namespaced: true,
  state: {
    cart: [],
    subTotal: 0,
    total: 0
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart
      setSubTotal(state)
    },
    addToCartSync(state, food) {
      addFoodToCart(state.cart, food)
      setSubTotal(state)
    },
    removeFromCartSync(state, itemToRemove) {
      state.cart = state.cart.filter(item => item !== itemToRemove)
      setSubTotal(state)
    },
    increaseQuantitySync(state, item) {
      console.log(item)
      increaseQuantity(item)
      setSubTotal(state)
    },
    decreaseQuantitySync(state, item) {
      decreaseQuantity(item)
      setSubTotal(state)
    }
  },
  actions: {
    async fetchCart({ commit }) {
      const cart = await getCart()
      commit('setCart', cart.map(item => {
        item.subTotal = item.food.price * item.quantity
        return item
      }))
    },
    async addToCart({ commit, state }, food) {
      commit('addToCartSync', food)
      await updateCart(state.cart)
    },
    async removeFromCart({ commit, state }, food) {
      commit('removeFromCartSync', food)
      await updateCart(state.cart)
    },
    async increaseQuantity({ commit, state }, food) {
      commit('increaseQuantitySync', food)
      await updateCart(state.cart)
    },
    async decreaseQuantity({ commit, state }, food) {
      commit('decreaseQuantitySync', food)
      await updateCart(state.cart)
    }
  }
}