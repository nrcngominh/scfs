import Header from './header'
import Account from './account'
import Food from './food'
import Cart from './cart'
import AccountModal from './account-modal'


export default {
  namespaced: true,
  modules: {
    header: Header,
    account: Account,
    accountModal: AccountModal,
    food: Food,
    cart: Cart
  }
}