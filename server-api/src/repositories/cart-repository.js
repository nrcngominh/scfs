import CartModel from '../models/cart-model'

/*
 * Find all
 */
const findById = async (accountId) => {
  return CartModel.findOne({
    customerId: accountId
  })
}

/*
 * Find all
 */
const update = async (customerId, cart) => {
  return CartModel.findOneAndUpdate({customerId: customerId}, {
    items: cart
  })
}

export default {
  findById,
  update
}
