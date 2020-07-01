import CartModel from '@model/cart'

/**
 * Create cart by customer ID
 * @param {String} customerId
 */
const create = (customerId) => {
  return CartModel.create({
    customerId: customerId,
    items: null
  })
}

/**
 * Find cart by customer ID
 * @param {String} customerId 
 */
const findById = (customerId) => {
  return CartModel.findOne({
    customerId: customerId
  })
}

/**
 * Update cart by customer ID
 * @param {String} customerId 
 * @param {Array<Object>} cart 
 */
const update = (customerId, cart) => {
  return CartModel.findOneAndUpdate({ customerId: customerId }, {
    items: cart
  })
}

export default {
  create,
  findById,
  update
}
