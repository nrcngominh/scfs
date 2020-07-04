import AuthenticationService from '@service/authentication'
import AuthorizationService from '@service/authorization'

const auth = async (req, res, next, authorizeMethod) => {
  try {
    const token = req.headers['x-access-token']
    const decoded = AuthenticationService.authenticate(token)
    try {
      const account = await authorizeMethod(decoded._id)
      req.decoded = {
        account: account
      }
      next()
    }
    catch (error) {
      console.log(error)
      res.status(403).send({
        message: 'Forbidden'
      })
    }
  }
  catch (error) {
    console.log(error)
    res.status(401).send({
      message: 'Unauthorized'
    })
  }
}

/**
 * Customer auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next
 */
const customer = async (req, res, next) => {
  auth(req, res, next, AuthorizationService.customer)
}

/**
 * Admin auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next
 */
const admin = async (req, res, next) => {
  auth(req, res, next, AuthorizationService.admin)
}

/**
 * Vendor auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next
 */
const vendor = async (req, res, next) => {
  auth(req, res, next, AuthorizationService.vendor)
}

export default {
  customer,
  admin,
  vendor
}