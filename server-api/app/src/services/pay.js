import { randomNumber } from '@/services/random'
import MomoService from '@/services/momo'
import CouponRepo from '@/repositories/coupon'
import FoodRepo from '@/repositories/food'
import OrderRepo from '@/repositories/order'

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
  console.log(cart, couponId, account)
  const subTotal = await calcSubtotal(cart)
  let coupon = null
  try {
    coupon = await getCoupon(couponId)
  }
  catch (error) { }
  const total = calcTotal(subTotal, coupon)


  const billId = 'B' + randomNumber(9)
  const qrCode = MomoService.generatePayQrCode(total, billId)
  console.log(billId, qrCode)

  const order = {
    billId: billId,
    customerId: account._id,
    totalMoney: subTotal,
    discountCodeId: couponId,
    totalMoneyAfterDiscount: total,
    items: cart.map(item => ({
      foodId: item.food._id,
      quantity: item.quantity,
      subTotal: item.food.price * item.quantity
    }))
  }

  await OrderRepo.create(order)

  return {
    billId: billId,
    qrCode: qrCode
  }
}

const createBillAnonymous = async (cart) => {
  console.log(cart)
  const subTotal = await calcSubtotal(cart)
  console.log(subTotal, cart)
  const billId = 'B' + randomNumber(9)
  const qrCode = MomoService.generatePayQrCode(subTotal, billId)
  console.log(billId, qrCode)

  const order = {
    billId: billId,
    customerId: 0,
    totalMoney: subTotal,
    totalMoneyAfterDiscount: subTotal,
    items: cart.map(item => ({
      foodId: item.food._id,
      quantity: item.quantity,
      subTotal: 0
    }))
  }
  console.log(order)

  await OrderRepo.create(order)

  return {
    billId: billId,
    qrCode: qrCode
  }
}

export default {
  createBill,
  createBillAnonymous
}