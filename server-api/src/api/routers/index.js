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

BaseRouter.use((req, res, next) => {
//   console.log()
//   console.log(new Date().toISOString()
//     .replace(/T/, ' ')
//     .replace(/\..+/, '')
//   )
//   console.log(req.method, req.originalUrl)
//   console.log('Headers:', req.headers)
//   if (req.method == 'GET') {
//     console.log('Params:', req.params)
//   }
//   else {
//     console.log('Body:', req.body)
//   }
//   console.log()
  next()
})

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
