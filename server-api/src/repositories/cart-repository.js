import CartModel from '../models/cart-model'

/*
 * Find all
 */
const findById = async (id) => {
  return (await CartModel.find())[0]
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
