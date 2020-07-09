import AccountModel from '@/models/account'

/**
 * Create new customer
 * @param {String} email 
 * @param {String} password 
 * @param {String} fullName 
 * @param {Number} phoneNumber 
 */
const createCustomer = (email, password, fullName, phoneNumber) => {
  return AccountModel.create({
    email: email,
    password: password,
    fullName: fullName,
    phoneNumber: phoneNumber,
    type: 'customer'
  })
}

/**
 * Create new customer from google email
 * @param {String} email 
 */
const createCustomerGoogle = (email) => {
  return AccountModel.create({
    email: email,
    service: 'google',
    type: 'customer'
  })
}

/**
 * Find normal account by email
 * @param {String} email
 */
const findNormalAccountByEmail = (email) => {
  return AccountModel.findOne({
    email: email,
    service: 'normal'
  }).select(' password type')
}

/**
 * Find account by email
 * @param {String} email
 */
const findGoogleAccountByEmail = (email) => {
  return AccountModel.findOne({
    email: email,
    service: 'google'
  }).select(' password type')
}

/**
 * Find account by id
 * @param {String} id
 */
const findById = (id) => {
  return AccountModel.findById(id)
    .select(' email type')
}

export default {
  createCustomer,
  createCustomerGoogle,
  findNormalAccountByEmail,
  findGoogleAccountByEmail,
  findById
}
