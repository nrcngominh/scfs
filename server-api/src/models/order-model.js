import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
  billId: String,
  accountId: String,
  date: Date,
  customerId: String,
  items: [
    {
      foodId: String,
      quantity: Number
    }
  ]
})
const AccountModel = mongoose.model('Order', orderSchema, 'order')

export default AccountModel
