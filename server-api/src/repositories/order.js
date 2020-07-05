import OrderModel from '@/models/order'

/**
 * Create new order
 * @param {Object} order 
 */
const create = (order) => {
  return OrderModel.create(order)
}

/**
 * Find order by bill ID
 * @param {String} billId 
 */
const findByBillId = (billId) => {
  return OrderModel.findOne({
    billId: billId
  })
}

/**
 * Find orders by customer ID
 * @param {String} accountId 
 */
const findByAccountId = (accountId) => {
  console.log(accountId)
  return OrderModel.find({
    accountId: accountId
  })
}

const updatePaidByBillId = (billId) => {
  return OrderModel.updateOne({
    billId: billId
  }, {
    hasPaid: true,
    hasServed: false
  })
}

export default {
  create,
  findByBillId,
  findByAccountId,
  updatePaidByBillId
}