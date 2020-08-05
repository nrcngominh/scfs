import Router from 'express'
import OrderRepo from '@/repositories/order'
import FoodRepo from '@/repositories/food'
const AdminRouter = Router()

/*
 * Get order info
 */
AdminRouter.get('/order', async (req, res) => {
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
AdminRouter.put('/order', async (req, res) => {
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

export default AdminRouter