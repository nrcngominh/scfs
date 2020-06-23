import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
    billId: String,
    accountId: String,
    date: Date,
    discountCode: String,
    discountValue: Number,
    customerId: String,
    items: [{
        foodId: String,
        quantity: Number
    }]
})
const AccountModel = mongoose.model('Order', OrderSchema, 'order')

export default AccountModel