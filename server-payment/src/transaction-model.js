import mongoose from 'mongoose'

const TransactionSchema = mongoose.Schema({
  customerPhoneNumber: String,
  billId: String,
  momoTransId: String,
  amount: Number,
  hasPaid: false
})
const TransactionModel = mongoose.model('Transaction', TransactionSchema, 'momo')

export default TransactionModel
