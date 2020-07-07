import Header from './header'
import Account from './account'
import Food from './food'
import Cart from './cart'


export default {
  namespaced: true,
  modules: {
    header: Header,
    account: Account,
    food: Food,
    cart: Cart
  }
}