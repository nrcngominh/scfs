import Router from 'express'
import RegisterService from '../../services/register-service'

const RegisterRouter = Router()

RegisterRouter.post('/', async(req, res) => {
    const isSuccess = await RegisterService.register(req.body.email, req.body.password)
    res.send({
        status: isSuccess ? 'success' : 'failed'
    })
})

export default RegisterRouter