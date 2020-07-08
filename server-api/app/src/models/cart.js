import mongoose from 'mongoose'

const CartSchema = mongoose.Schema({
  customerId: { type: String, unique: true, required: true },
  items: [
    {
      foodId: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
})

const AccountModel = mongoose.model('Cart', CartSchema, 'cart')

export default AccountModel
