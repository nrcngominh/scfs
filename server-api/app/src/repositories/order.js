import OrderModel from '../models/order'
import momo from '@/services/momo'

/*
 * Create order
 */
const create = async (order) => {
  return OrderModel.create(order)
}

/*
 * Find by bill id
 */
const findByBillId = async (billId) => {
  return OrderModel.findOne({
    billId: billId
  })
}

/*
 * Find by bill id
 */
const findByAccountId = async (accountId) => {
  console.log(accountId)
  return OrderModel.find({
    customerId: accountId
  })
}

const updatePaidByBillId = async (billId, momoTransId) => {
  return OrderModel.updateOne({
    billId: billId
  }, {
    momoTransId: momoTransId,
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
    hasPaid: true,
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