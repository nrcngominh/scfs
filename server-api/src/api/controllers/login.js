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
const customerLogin = async (req, res) => {
  login(req, res, LoginService.customerLogin)
}

/**
 * Admin login
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const adminLogin = async (req, res) => {
  login(req, res, LoginService.adminLogin)
}

/**
 * Vendor login
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const vendorLogin = async (req, res) => {
  login(req, res, LoginService.vendorLogin)
}

export {
  customerLogin,
  adminLogin,
  vendorLogin
}