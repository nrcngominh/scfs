import Router from 'express'
import LoginController from '@controller/login'

const VendorRouter = Router()

VendorRouter.post('/login', LoginController.vendor)

export default VendorRouter