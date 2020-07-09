import CouponRepo from '@/repositories/coupon'

const getByCode = async (code) => {
  return await CouponRepo.getByCode(code)
}

export default {
  getByCode
}