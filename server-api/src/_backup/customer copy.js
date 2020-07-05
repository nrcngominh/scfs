import Router from 'express'
import FoodController from '@/api/controllers/food'
import AccountController from '@/api/controllers/login'

const CustomerRouter = Router()

/* Food routing */
CustomerRouter.get('/food', FoodController.getAllFoods)

/* Account routing */
CustomerRouter.post('/login', AccountController.customerLogin)

export default CustomerRouter

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