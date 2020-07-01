import Router from 'express'
import { vendorLogin } from '@controller/login'

const VendorRouter = Router()

VendorRouter.post('/login', vendorLogin)

export default VendorRouter