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
    hasPaid: true,
    hasServed: false
  })
}

const updateServedByBillId = async (billId) => {
  return OrderModel.updateOne({
    billId: billId
  }, {
    hasServed: true
  })
}

const findAllUnserved = async () => {
  return OrderModel.find({
    hasServed: false
  })
}

export default {
  create,
  findAllUnserved,
  findByBillId,
  findByAccountId,
  updatePaidByBillId,
  updateServedByBillId
}