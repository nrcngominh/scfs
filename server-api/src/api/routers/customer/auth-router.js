import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'

const AuthRouter = Router()

AuthRouter.post(['/', '/admin'], AuthMiddleware)

/*
 * Authentication for both customer and admin
 */
AuthRouter.post(['/', '/admin'], (req, res) => {
  res.status(200).send({
    message: 'Success',
    account: req.jwtDecodedData
  })
})

export default AuthRouter
