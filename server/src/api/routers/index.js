import express from 'express'
import LoginRouter from './login-router'
import RegisterRouter from './register-router'
import FoodRouter from './food-router'
import path from 'path'

const BaseRouter = express.Router()

// Redirect homepage
const publicDir = path.join(process.env.PWD, '../client/dist')
console.log(publicDir);

BaseRouter.use('/', express.static(publicDir))
BaseRouter.use('/login', LoginRouter)
BaseRouter.use('/register', RegisterRouter)
BaseRouter.use('/food', FoodRouter)

export default BaseRouter
