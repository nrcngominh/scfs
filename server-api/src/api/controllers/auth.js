import GoogleService from '@/services/google'
import LoginService from '@/services/login'

/**
 * Auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const auth = async (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
}

/**
 * Auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const authGoogle = async (req, res) => {
  const googleAccessToken = await GoogleService.getAccessTokenFromCode(req.body.code)
  const accountInfo = await GoogleService.getAccountInfo(googleAccessToken)
  const accessToken = await LoginService.customerGoogle(accountInfo.email)
  res.status(200).send({
    accessToken: accessToken
  })
}

export default {
  auth,
  authGoogle
}