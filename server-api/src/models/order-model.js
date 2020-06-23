import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
  billId: String,
  momoTransId: String,
  accountId: String,
  date: Date,
  totalMoney: Number,
  discountCode: String,
  discountValue: Number,
  hasPaid: Boolean,
  items: [{
    foodId: String,
    quantity: Number
  }]
})
const AccountModel = mongoose.model('Order', OrderSchema, 'order')

export default AccountModel