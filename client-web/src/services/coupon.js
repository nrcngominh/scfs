import { checkCoupon } from '@/api/coupon'

const check = async (couponCode) => {
  try {
    return await checkCoupon(couponCode)
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export default {
  check
}