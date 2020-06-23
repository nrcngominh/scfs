import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'
import AccountRepo from '../../repositories/account-repository'
import OrderRepo from '../../repositories/order-repository'

const TransactionRouter = Router()
TransactionRouter.all('/', AuthMiddleware)

/*
 * Get order info
 */
TransactionRouter.get('/', async(req, res) => {
  try {
    const account = await AccountRepo.findByEmail(req.jwtDecodedData.email)
    console.log(account._id)
    const orders = await OrderRepo.findByAccountId(account._id)
    res.status(200).send(orders.map(order => {
      return {
        billId: order.billId,
        date: order.date.toLocaleDateString("de-AT").replace('.', '/').replace('.', '/'),
        totalMoney: order.totalMoney
      }
    }))
  }
  catch (error) {
    console.log(error)
    res.status('404').send({
      message: "Failed"
    })
  }
})

export default TransactionRouter