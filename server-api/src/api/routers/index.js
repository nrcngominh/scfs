import Router from 'express'
import CustomerRouter from './customer'
import AdminRouter from './admin'
import VendorRouter from './vendor'
import FoodRouter from './food'

const BaseRouter = Router()

BaseRouter.use('/api/customer', CustomerRouter)
BaseRouter.use('/api/admin', AdminRouter)
BaseRouter.use('/api/vendor', VendorRouter)
BaseRouter.use('/api/food', FoodRouter)

BaseRouter.all('*', (req, res) => {
  res.status(404).send({
    message: 'Bad request'
  })
})

export default BaseRouter
