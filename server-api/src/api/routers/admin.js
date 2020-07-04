import Router from 'express'
import LoginController from '@controller/login'

const AdminRouter = Router()

AdminRouter.post('/login', LoginController.admin)

export default AdminRouter