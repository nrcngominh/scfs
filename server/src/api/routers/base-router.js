import Router from 'express'
import LoginRouter from './login-router'

const BaseRouter = Router()
BaseRouter.post('/login', LoginRouter)

export default BaseRouter