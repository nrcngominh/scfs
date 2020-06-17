import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'

const AuthRouter = Router()

AuthRouter.post('/', AuthMiddleware)
AuthRouter.post('/', (req, res) => {
  const accountData = req.jwtDecoded
  console.log(accountData);
  res.send({
    status: 'Success',
    account: accountData.data
  })
})

export default AuthRouter
