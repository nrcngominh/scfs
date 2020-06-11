import Router from 'express'
import LoginRouter from './login-router'
import RegisterRouter from './register-router'
import FoodRouter from './food-router'
import MomoRouter from './momo-router'

const BaseRouter = Router()

BaseRouter.use('/login', LoginRouter)
BaseRouter.use('/register', RegisterRouter)
BaseRouter.use('/food', FoodRouter)
BaseRouter.use('/momo', MomoRouter)

export default BaseRouter
