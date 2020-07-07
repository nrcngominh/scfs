import CouponModel from '@/models/coupon'

const getByCode = (code) => {
  return CouponModel.findOne({
    code: code,
    expireDate: {
      $gte: new Date()
    }
  }).select(' code discount')
}

export default {
  getByCode
}