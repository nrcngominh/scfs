import mongoose from 'mongoose'

const CouponSchema = mongoose.Schema({
  code: { type: String, required: true, index: true, unique: true },
  discount: { type: String, required: true },
  expireDate: { type: Date, required: true }
})

const CouponModel = mongoose.model('Coupon', CouponSchema, 'coupon')

export default CouponModel
