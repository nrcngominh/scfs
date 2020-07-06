import RegisterService from '@/services/register'

/**
 * Customer register
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const customer = async (req, res) => {
  try {
    await RegisterService.customer(
      req.body.email, req.body.password,
      req.body.fullName, req.body.phoneNumber
    )
    res.status(201).send({
      message: 'Success'
    })
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      message: 'Failed'
    })
  }
}

export default {
  customer
}