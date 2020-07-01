import AccountRepo from '@repository/account'
import bcrypt from 'bcrypt';
import JwtService from './jwt'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const CUSTOMER_TOKEN_ALIVE_TIME = '1d'

const login = async (email, password, typeValidator) => {
  const account = await AccountRepo.findByEmail(email)
  if (!account || !bcrypt.compareSync(password, account.password)) {
    throw 'Unauthorized'
  }
  if (!typeValidator(account)) {
    throw 'Unauthorized'
  }
  return JwtService.generateToken({
    _id: account._id,
    type: account.type
  }, ACCESS_TOKEN_SECRET, CUSTOMER_TOKEN_ALIVE_TIME)
}

/**
 * Login for customer
 * @param {String} email 
 * @param {String} password 
 * @returns {String} token
 */
const customerLogin = async (email, password) => {
  return login(email, password, account => account.type === 'customer')
}

/**
 * Login for admin
 * @param {String} email 
 * @param {String} password 
 * @returns {String} token
 */
const adminLogin = async (email, password) => {
  return login(email, password, account => account.type === 'admin')
}

/**
 * Login for vendor
 * @param {String} email 
 * @param {String} password 
 * @returns {String} token
 */
const vendorLogin = async (email, password) => {
  return login(email, password, account => account.type === 'vendor')
}

export default {
  customerLogin,
  adminLogin,
  vendorLogin
}