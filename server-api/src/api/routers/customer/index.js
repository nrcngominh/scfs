import Router from 'express'

// import LoginRouter from './login-router'
// import RegisterRouter from './register-router'
// import FoodRouter from './food-router'
// import UploadRouter from './upload-router'
// import CategoryRouter from './category-router'
// import MomoRouter from './momo-router'
// import AuthRouter from './auth-router'
// import CartRouter from './cart-router'
// import OrderRouter from './order-router'
// import TransactionRouter from './transaction-router'

const CustomerRouter = Router()

CustomerRouter.use((req, res, next) => {
  next()
})

// CustomerRouter.use('/login', LoginRouter)
// CustomerRouter.use('/register', RegisterRouter)
// CustomerRouter.use('/food', FoodRouter)
// CustomerRouter.use('/upload', UploadRouter)
// CustomerRouter.use('/category', CategoryRouter)
// CustomerRouter.use('/momo', MomoRouter)
// CustomerRouter.use('/auth', AuthRouter)
// CustomerRouter.use('/cart', CartRouter)
// CustomerRouter.use('/order', OrderRouter)
// CustomerRouter.use('/transaction', TransactionRouter)

export default CustomerRouter