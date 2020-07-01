import Router from 'express'
import { adminLogin } from '@controller/login'

const AdminRouter = Router()

AdminRouter.post('/login', adminLogin)

export default AdminRouter