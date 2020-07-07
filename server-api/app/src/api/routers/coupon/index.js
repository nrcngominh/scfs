import Router from 'express'
import CouponController from '@/api/controllers/coupon'
import AuthMiddleware from '@/api/middlewares/auth'

const CouponRouter = Router()

CouponRouter.get('/customer', AuthMiddleware.customer, CouponController.getByCode)

export default CouponRouter