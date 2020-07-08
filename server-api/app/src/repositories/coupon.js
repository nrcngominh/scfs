import CouponModel from '@/models/coupon'

const getByCode = (code) => {
  return CouponModel.findOne({
    code: code,
    expireDate: {
      $gte: new Date()
    }
  }).select(' code discount')
}

const getById = (_id) => {
  return CouponModel.findOne({
    _id: _id,
    expireDate: {
      $gte: new Date()
    }
  }).select(' code discount')
}

export default {
  getByCode,
  getById
}