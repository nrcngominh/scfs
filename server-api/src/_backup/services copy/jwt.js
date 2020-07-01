import jwt from 'jsonwebtoken'

/**
 * 
 * @param {Object} data 
 * @param {String} secretKey 
 * @param {String} tokenLife 
 */
const generateToken = (data, secretKey, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ data: data }, secretKey, {
      algorithm: "HS256",
      expiresIn: tokenLife
    }, (error, token) => {
      error ? reject(error) : resolve(token)
    })
  })
}

/**
 * 
 * @param {String} token 
 * @param {String} secretKey 
 */
const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      error ? reject(error) : resolve(decoded)
    })
  })
}

export default {
  generateToken,
  verifyToken
}
