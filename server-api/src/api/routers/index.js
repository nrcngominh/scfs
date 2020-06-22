import Router from 'express'
import LoginRouter from './login-router'
import RegisterRouter from './register-router'
import FoodRouter from './food-router'
import UploadRouter from './upload-router'
import CategoryRouter from './category-router'
import MomoRouter from './momo-router'
import PaymentRouter from './payment-router'
import AuthRouter from './auth-router'
import CartRouter from './cart-router'

const BaseRouter = Router()

BaseRouter.use('/login', LoginRouter)
BaseRouter.use('/register', RegisterRouter)
BaseRouter.use('/food', FoodRouter)
BaseRouter.use('/upload', UploadRouter)
BaseRouter.use('/category', CategoryRouter)
BaseRouter.use('/momo', MomoRouter)
BaseRouter.use('/payment', PaymentRouter)
BaseRouter.use('/auth', AuthRouter)
BaseRouter.use('/cart', CartRouter)

export default BaseRouter
