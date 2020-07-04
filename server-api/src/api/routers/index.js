import Router from 'express'
import CustomerRouter from './customer'
import AdminRouter from './admin'
import VendorRouter from './vendor'
import MomoRouter from './momo'
import FoodRouter from './food'
import CategoryRouter from './category'
import PayRouter from './pay'

const BaseRouter = Router()

BaseRouter.use('/api/customer', CustomerRouter)
BaseRouter.use('/api/admin', AdminRouter)
BaseRouter.use('/api/vendor', VendorRouter)
BaseRouter.use('/api/momo', MomoRouter)
BaseRouter.use('/api/food', FoodRouter)
BaseRouter.use('/api/category', CategoryRouter)
BaseRouter.use('/api/pay', PayRouter)

BaseRouter.all('*', (req, res) => {
  res.status(404).send({
    message: 'Bad request'
  })
})

export default BaseRouter
