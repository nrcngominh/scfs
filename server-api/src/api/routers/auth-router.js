import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'

const AuthRouter = Router()

AuthRouter.post('/', AuthMiddleware)
AuthRouter.post('/', (req, res) => {
  res.send({
    status: 'Success',
    account: req.jwtDecoded.data
  })
})

export default AuthRouter
