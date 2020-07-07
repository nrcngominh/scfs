import CouponService from '@/services/coupon'

/**
 * Get coupon
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getByCode = async (req, res) => {
  try {
    const coupon = await CouponService.getByCode(req.query.couponCode)
    res.status(200).send(coupon)
  }
  catch (error) {
    res.status(400).send({
      message: 'Failed'
    })
  }
}

export default {
  getByCode
}