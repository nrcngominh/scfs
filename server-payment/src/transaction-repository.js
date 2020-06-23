import TransactionModel from './transaction-model'

/*
 * Create
 */
const create = async(transactionInfo) => {
  return TransactionModel.create(transactionInfo)
}

/*
 * Find 
 */
const findAll = async () => {
  return TransactionModel.find()
}

const updatePaid = async (momoTransId) => {
  return TransactionModel.updateOne({
    momoTransId: momoTransId
  }, {
    hasPaid: true
  })
}

export default {
  create,
  findAll,
  updatePaid
}
