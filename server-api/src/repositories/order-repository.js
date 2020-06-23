import OrderModel from '../models/order-model'

/*
 * Create order
 */
const create = async(order) => {
  return OrderModel.create(order)
}

/*
 * Find by bill id
 */
const findByBillId = async(billId) => {
  return OrderModel.findOne({
    billId: billId
  })
}

/*
 * Find by bill id
 */
const findByAccountId = async(accountId) => {
  console.log(accountId)
  return OrderModel.find({
    accountId: accountId
  })
}

const updatePaidByBillId = async (billId) => {
  return OrderModel.updateOne({
    billId: billId
  }, {
    hasPaid: true
  })
}

export default {
  create,
  findByBillId,
  findByAccountId,
  updatePaidByBillId
}