import axios from 'axios'

const checkCoupon = async (couponCode) => {
  const res = await axios.get('/api/coupon/customer', {
    params: {
      couponCode: couponCode
    }
  })
  return res.data
}

export {
  checkCoupon
}