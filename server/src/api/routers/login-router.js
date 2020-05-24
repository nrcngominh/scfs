import Router from 'express'
import LoginService from '../../services/login-service'

const LoginRouter = Router()

LoginRouter.post('/', async (req, res) => {
  const isSuccess = await LoginService.login(req.body.email, req.body.password)
  console.log(req.body)
  res.send({
    status: isSuccess ? 'success' : 'failed'
  })
})

export default LoginRouter