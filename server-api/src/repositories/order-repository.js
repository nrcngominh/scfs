import OrderModel from '../models/order-model'

/*
 * Create order
 */
const create = async (order) => {
  return OrderModel.create(order)
}

export default {
  create
}
