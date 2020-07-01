import Router from 'express'
import { loginWithType } from '../../services/login'
import { generateToken } from '../../services/jwt'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

const LoginRouter = Router()

// Login with handler
const login = async (req, res, type) => {
  try {
    const account = await loginWithType(req.body.email, req.body.password, type)
    if (!account) {
      res.status(401).send({
        message: 'Unauthorized'
      })
    }
    else {
      const token = await generateToken({
        email: account.email,
        type: account.type
      }, accessTokenSecret, '1d')

      res.status(200).send({
        message: 'Success',
        accessToken: token
      })
    }
  }
  catch (error) {
    res.status(401).send({
      message: 'Unauthorized'
    })
  }
}
/*
 * Handle customer login
 */
LoginRouter.post('/', async (req, res) => {
  login(req, res, 'customer')
})

/*
 * Handle admin login
 */
LoginRouter.post('/admin', async (req, res) => {
  login(req, res, 'admin')
})

export default LoginRouter
