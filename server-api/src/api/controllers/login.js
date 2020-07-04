import LoginService from '@service/login'

const login = async (req, res, loginMethod) => {
  try {
    const token = await loginMethod(
      req.body.email, req.body.password
    )
    res.status(200).send({
      accessToken: token
    })
  }
  catch (error) {
    console.log(error)
    res.status(401).send({
      message: 'Unauthorized'
    })
  }
}

/**
 * Customer login
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const customer = async (req, res) => {
  login(req, res, LoginService.customer)
}

/**
 * Admin login
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const admin = async (req, res) => {
  login(req, res, LoginService.admin)
}

/**
 * Vendor login
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const vendor = async (req, res) => {
  login(req, res, LoginService.vendor)
}

export default {
  customer,
  admin,
  vendor
}