import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'
import AccountRepo from '../../repositories/account'
import OrderService from '../../../services/order'
import OrderRepo from '../../repositories/order'
import FoodRepo from '../../repositories/food'
import axios from 'axios'
const OrderRouter = Router()

OrderRouter.all('/', AuthMiddleware)

const randomNumber = (numOfDigits) => {
  return Math.floor(Math.random() * Math.pow(10, numOfDigits)).toString().padStart(numOfDigits, '0')
}

/*
 * Get order info
 */
OrderRouter.get('/admin/', async (req, res) => {
  try {
    const orders = await OrderRepo.findAllUnserved()
    const processedOrders = await Promise.all(orders.map(async order => {
      const processedItems = await Promise.all(order.items.map(async item => {
        const food = await FoodRepo.findById(item.foodId)
        return {
          food: food,
          quantity: item.quantity
        }
      }))
      return {
        billId: order.billId,
        momoTransId: order.momoTransId,
        date: order.date,
        items: processedItems,
        totalMoney: order.totalMoney
      }
    }))
    res.status(200).send(processedOrders)
  }
  catch (error) {
    console.log(error)
    res.status('404').send({
      message: "Failed"
    })
  }
})

/*
 * Get order info
 */
OrderRouter.put('/admin/', async (req, res) => {
  try {
    await OrderRepo.updateServedByBillId(req.body.billId)
    res.status(202).send({
      message: 'Success'
    })
  }
  catch (error) {
    res.status('404').send({
      message: "Failed"
    })
  }
})

/*
 * Get order info
 */
OrderRouter.get('/', async (req, res) => {
  try {
    const order = await OrderRepo.findByBillId(req.params.billId)
    res.status(200).send(order)
  }
  catch (error) {
    res.status('404').send({
      message: "Failed"
    })
  }
})

/*
 * Post order info
 */
OrderRouter.post('/', async (req, res) => {
  if (!Array.isArray(req.body.cart) || !req.body.cart.length) {
    res.status('400').send({
      message: "Failed"
    })
    return
  }
  const account = await AccountRepo.findByEmail(req.jwtDecodedData.email)
  const billId = randomNumber(10)
  const momoQrCode = "https://test-payment.momo.vn/pay/store/MOMOIQA420180417-storeid01?a=10000&b=B001221&s=601a7280711dd72bfae8c365801f5e257311a1ebd8779cf3bc4ac57c4002a978"

  const totalMoney = await OrderService.getTotalMoney(req.body.cart)

  try {
    const transRes = await axios.post(process.env.PAYMENT_HOST + 'api/transaction', {
      billId: billId,
      amount: totalMoney
    })
    const order = {
      billId: billId,
      momoTransId: transRes.data.momoTransId,
      accountId: account._id,
      date: req.body.date,
      totalMoney: totalMoney,
      items: req.body.cart,
      hasPaid: false
    }

    await OrderRepo.create(order)
    res.status(201).send({
      billId: billId,
      momoQrCode: momoQrCode
    })
  }
  catch (error) {
    console.log(error)
    res.status('400').send({
      message: "Failed"
    })
  }
})

export default OrderRouter