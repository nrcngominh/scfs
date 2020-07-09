import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
  billId: { type: String, required: true, index: true, unique: true },
  momoTransId: {
    type: String, default: null,
    index: true, unique: true, sparse: true
  },
  customerId: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  items: [{
    foodId: { type: String, required: true },
    quantity: { type: Number, required: true },
    subTotal: { type: Number, required: true }
  }],
  totalMoney: { type: Number, required: true },
  discountCodeId: { type: String },
  totalMoneyAfterDiscount: { type: Number, required: true },
  hasPaid: { type: Boolean, default: false },
  hasServed: { type: Boolean, default: false }
})

const AccountModel = mongoose.model('Order', OrderSchema, 'order')

export default AccountModel