import AccountRepo from '../repositories/account-repository'
import bcrypt from 'bcrypt';

/*
 * Login for both customer and admin
 */
const loginWithType = (email, password, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const account = await AccountRepo.findByEmail(email)
      if (account && bcrypt.compareSync(password, account.password)
        && account.type === type) {
        return resolve(account)
      }
      reject('Authentication failed')
    }
    catch (error) {
      reject(error)
    }
  })
}

/*
 * Register for customer
 */
const registerCustomer = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = bycript.hashSync(password, 10);
      const account = await AccountRepo.create(email, hashedPassword)
      if (!account) {
        return reject('Email exists')
      }
      resolve(account)
    }
    catch (error) {
      reject(error)
    }
  })
}

export {
  loginWithType,
  registerCustomer
}
