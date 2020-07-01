import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
  billId: String,
  momoTransId: String,
  customerId: String,
  date: Date,
  items: [{
    foodId: String,
    quantity: Number,
    subTotal: Number
  }],
  totalMoney: Number,
  discountCode: String,
  totalMoneyAfterDiscount: Number,
  hasPaid: Boolean,
  hasServed: Boolean
})

const AccountModel = mongoose.model('Order', OrderSchema, 'order')

export default AccountModel