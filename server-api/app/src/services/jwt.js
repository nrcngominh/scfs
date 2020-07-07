import jwt from 'jsonwebtoken'

/**
 * Generate token from data
 * @param {Object} data 
 * @param {String} secretKey 
 * @param {String} tokenLife 
 * @returns {String} token
 */
const generateToken = (data, secretKey, tokenLife) => {
  return jwt.sign({ data: data }, secretKey, {
    algorithm: "HS256",
    expiresIn: tokenLife
  })
}

/**
 * Verify a token
 * @param {String} token 
 * @param {String} secretKey 
 * @returns {Object} decoded data
 */
const verifyToken = (token, secretKey) => {
  return jwt.verify(token, secretKey)
}

export default {
  generateToken,
  verifyToken
}
