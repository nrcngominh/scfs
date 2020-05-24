import Router from 'express'
import LoginRouter from './login-router'
import RegisterRouter from './register-router'

const BaseRouter = Router()
BaseRouter.use('/login', LoginRouter)
BaseRouter.use('/register', RegisterRouter)

export default BaseRouter