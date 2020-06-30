import Router from 'express'

import CustomerRouter from './customer'
import AdminRouter from './admin'
import VendorRouter from './vendor'

const BaseRouter = Router()

BaseRouter.use('/api/customer', CustomerRouter)
BaseRouter.use('/api/admin', AdminRouter)
BaseRouter.use('/api/vendor', VendorRouter)

export default BaseRouter
