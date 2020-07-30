import Router from 'express'
import CustomerRouter from './customer'
import AdminRouter from './admin'
import VendorRouter from './vendor'
import MomoRouter from './momo'
import RegisterRouter from './account/register'
import LoginRouter from './account/login'
import AuthRouter from './account/auth'
import FoodRouter from './food/food'
import CategoryRouter from './food/category'
import CouponRouter from './coupon'
import BadRequestController from '@/api/controllers/bad-request'
import LoggerMiddleware from '@/api/middlewares/logger'
const BaseRouter = Router()

BaseRouter.all('*', LoggerMiddleware.log)

BaseRouter.use('/api/customer', CustomerRouter)
BaseRouter.use('/api/admin', AdminRouter)
BaseRouter.use('/api/vendor', VendorRouter)

BaseRouter.use('/api/login', LoginRouter)
BaseRouter.use('/api/register', RegisterRouter)
BaseRouter.use('/api/auth', AuthRouter)

BaseRouter.use('/api/food', FoodRouter)
BaseRouter.use('/api/category', CategoryRouter)
BaseRouter.use('/api/coupon', CouponRouter)

BaseRouter.use('/api/momo', MomoRouter)

BaseRouter.all('*', BadRequestController.response)

export default BaseRouter
