import AccountRepo from '../../repositories/account'
import bcrypt from 'bcrypt';
import JwtService from './jwt'

const login = async (email, password) => {
  const account = await AccountRepo.findByEmail(email)
  if (!account || !bcrypt.compareSync(password, account.password)) {
    throw 'Unauthorized'
  }
  return account
}

/**
 * 
 * @param {String} email 
 * @param {String} password 
 * @returns {String} token
 */
const customerLogin = async (email, password) => {
  const account = await login(email, password)
  return await JwtService.generateToken({ _id: account._id },
    accessTokenSecret, CUSTOMER_TOKEN_ALIVE_TIME
  )
}

export default {
  customerLogin
}

// /*
//  * Register for customer
//  */
// const registerCustomer = (email, password, fullName, phoneNumber) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log(email, password, fullName, phoneNumber)
//       const hashedPassword = bcrypt.hashSync(password, 10);
//       const account = await AccountRepo.create(email, hashedPassword, fullName, phoneNumber)
//       if (!account) {
//         return reject('Email exists')
//       }
//       resolve(account)
//     }
//     catch (error) {
//       reject(error)
//     }
//   })
// }