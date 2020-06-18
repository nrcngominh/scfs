import jwt from 'jsonwebtoken'

/*
 * Generarate a token
 */
const generateToken = (data, secretKey, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ data: data }, secretKey, {
      algorithm: "HS256",
      expiresIn: tokenLife
    },(error, token) => {
      if (error) {
        return reject(error);
      }
      resolve(token)
    })
  })
}

/*
 * Verify a token
 */
const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return reject(error)
      }
      resolve(decoded)
    })
  })
}

export {
  generateToken,
  verifyToken
}
