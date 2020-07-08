import { randomNumber } from '@/services/random'
import MomoService from '@/services/momo'
import CouponRepo from '@/repositories/coupon'
import FoodRepo from '@/repositories/food'

const calcSubtotal = async cart => {
  const foodIds = cart.map(item => item.food._id)
  const foods = await FoodRepo.findByIds(foodIds)
  const quantities = cart.map(item => item.quantity)

  let subtotal = 0
  foods.forEach((food, i) => subtotal += food.price * quantities[i])
  return subtotal
}

const getCoupon = async (couponId) => {
  try {
    return await CouponRepo.getById(couponId)
  }
  catch (error) {
    console.log(error)
    return null
  }
}

const calcTotal = (subtotal, coupon) => {
  if (!coupon) {
    return subtotal
  }

  const discount = coupon.discount
  const discountValue = Number(discount)
  if (discountValue) {
    return subtotal - discountValue
  }

  const discountPercent = Number(discount.slice(0, -1))
  if (discountPercent) {
    return subtotal * (100 - discountPercent) / 100.0
  }
  return subtotal
}

const createBill = async (cart, couponId, account) => {
  const subTotal = await calcSubtotal(cart)
  const coupon = await getCoupon(couponId)
  const total = calcTotal(subTotal, coupon)

  const billId = 'B' + randomNumber(9)
  const qrCode = MomoService.generatePayQrCode(total, billId)
  console.log(billId, qrCode)
  return {
    billId: billId,
    qrCode: qrCode
  }
}

export default {
  createBill
}