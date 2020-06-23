import mongoose from 'mongoose'

const CartSchema = mongoose.Schema({
  customerId: String,
  items: [
    {
      foodId: String,
      quantity: Number
    }
  ]
})
const AccountModel = mongoose.model('Cart', CartSchema, 'cart')

export default AccountModel
