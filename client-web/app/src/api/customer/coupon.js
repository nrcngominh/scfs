import axios from 'axios'

const checkCoupon = async (couponCode) => {
  return await axios.get('/api/coupon/customer', {
    params: {
      couponCode: couponCode
    }
  })
}

export {
  checkCoupon
}