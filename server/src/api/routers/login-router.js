llllrt Router from 'express'
import LoginService from '../../services/login-service'

const LoginRouter = Router()

LoginRouter.post('/', async (req, res) => {
  const account = await LoginService.login(req.body.email, req.body.password)
  console.log(req.body)
  console.log(account)
    if (!account) {
        res.send({
            status: 'failed'
        })
    } else {
        if (account.type === 'customer') {
            res.send ({
                status: 'success',
                type: 'customer'
            })
        } else if (account.type === 'admin') {
            res.send ({
                status: 'success',
                type: 'admin'
            })
        }
    }
})

export default LoginRouter
