import { checkCoupon } from '@/api/customer/coupon'

const check = async (couponCode) => {
  try {
    const res = await checkCoupon(couponCode)
    return res.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export default {
  check
}