import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'
import AccountRepo from '../../repositories/account-repository'
import OrderRepo from '../../repositories/order-repository'

const OrderRouter = Router()

OrderRouter.all('/', AuthMiddleware)

const randomNumber = (numOfDigits) => {
  return Math.floor(Math.random() * Math.pow(10, numOfDigits)).toString().padStart(numOfDigits, '0')
}

/*
 * Get cart info
 */
OrderRouter.get('/', async(req, res) => {
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
 * Post cart info
 */
OrderRouter.post('/', async (req, res) => {
  const account = await AccountRepo.findByEmail(req.jwtDecodedData.email)
  const billId = randomNumber(10)
  const order = {
    billId: billId,
    accountId: account._id,
    date: req.body.date,
    items: req.body.cart
  }

  const momoQRCode = "https://test-payment.momo.vn/pay/store/MOMOIQA420180417-storeid01?a=10000&b=B001221&s=601a7280711dd72bfae8c365801f5e257311a1ebd8779cf3bc4ac57c4002a978"

  try {
    await OrderRepo.create(order)
    res.status(201).send({
      billId: billId,
      momoQRCode: momoQRCode
    })
  }
  catch(error) {
    console.log(error)
    res.status('400').send({
      message: "Failed"
    })
  }
})

export default OrderRouter