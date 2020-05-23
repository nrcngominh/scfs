import Router from 'express'
import LoginModel from '../models/login-model'

const LoginRouter = Router()

LoginRouter.post('/login', (req, res) => {
  // LoginModel.create({
  //   username: req.body.username,
  //   passwrod: req.body.username
  // })
  console.log(req.body)
  res.send({
    status: 'Failed'
  })
})

export default LoginRouter