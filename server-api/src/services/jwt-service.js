import jwt from 'jsonwebtoken'

const generateToken = (account, secretKey, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: account },
      secretKey,
      {
        algorithm: "HS256",
        expiresIn: tokenLife
      },
      (error, token) => {
        if (error) {
          return reject(error);
        }
        resolve(token)
      })
  })
}

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
