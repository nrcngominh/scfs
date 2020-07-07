import JwtService from './jwt'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

const authenticate = (jwt) => {
  return JwtService.verifyToken(jwt, ACCESS_TOKEN_SECRET).data
}

export default {
  authenticate
}