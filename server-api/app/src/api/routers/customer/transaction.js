import Router from 'express'
import AuthMiddleware from '@/api/middlewares/auth'
import OrderRepo from '@/repositories/order'
import FoodRepo from '@/repositories/food'

const TransactionRouter = Router()

TransactionRouter.get('/', AuthMiddleware.customer, async (req, res) => {
  try {
    console.log('sdfsadf')
    const customerId = req.decoded.account._id
    console.log(customerId)
    const orders = await OrderRepo.findByAccountId(customerId)
    res.status(200).send(orders)
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      message: 'Failed'
    })
  }
})

TransactionRouter.get('/:billId', AuthMiddleware.customer, async (req, res) => {
  try {
    console.log('asdfsdf')
    console.log(req.params.billId)
    const order = await OrderRepo.findByBillId(req.params.billId)
    console.log(order)
    const items = await Promise.all(order.items.map(async item => {
      const food = await FoodRepo.findById(item.foodId)
      console.log(food)
      return {
        food: food,
        quantity: item.quantity,
        subTotal: item.subTotal
      }
    }))
    console.log(items)
    res.status(200).send({
      items: items,
      total: order.totalMoney,
      totalReal: order.totalMoneyAfterDiscount
    })
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      message: 'Failed'
    })
  }
})

export default TransactionRouter