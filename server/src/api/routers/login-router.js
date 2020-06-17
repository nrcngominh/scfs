import Router from 'express'
import LoginService from '../../services/login-service'
import { generateToken } from '../../services/jwt-service'

const LoginRouter = Router()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const tokenLife = '1h'

LoginRouter.post('/', async(req, res) => {
    const account = await LoginService.login(req.body.email, req.body.password)
    console.log(req.body)
    console.log(account)
    if (!account) {
        res.send({
            status: 'failed'
        })
    } else {
        const accountData = {
            email: account.email,
        }
        const token = await generateToken(accountData, accessTokenSecret, tokenLife)
        console.log(token);

        res.send({
            status: 'Success',
            accessToken: token
        })
    }
})

export default LoginRouter