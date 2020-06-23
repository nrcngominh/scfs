import Router from 'express'
import { verifyToken } from '../../services/jwt-service'

const AuthMiddleware = Router()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

// Auth for user
const authWithType = async (req, res, next, type) => {
  const token = req.headers["x-access-token"]
  if (token) {
    try {
      const decoded = await verifyToken(token, accessTokenSecret)
      if (decoded.data.type === type) {
        req.jwtDecodedData = decoded.data
        next()
      }
      else {
        return res.status(403).send({
          message: "Forbidden"
        })
      }
    }
    catch (error) {
      return res.status(401).send({
        message: "Failed"
      })
    }
  }
  else {
    return res.status(403).send({
      message: "No token provided"
    })
  }
}


/*
 * Authentication for customer
 */
AuthMiddleware.post('/', async (req, res, next) => {
  authWithType(req, res, next, 'customer')
})

/*
 * Authentication for admin
 */
AuthMiddleware.post('/admin', async (req, res, next) => {
  authWithType(req, res, next, 'admin')
})

export default AuthMiddleware
