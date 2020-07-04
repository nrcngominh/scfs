import AccountModel from '@model/account'

const createAccount = (email, password, fullName, phoneNumber, type) => {
  return AccountModel.create({
    email: email,
    password: password,
    fullName: fullName,
    phoneNumber: phoneNumber,
    type: type
  })
}

/**
 * Create new customer
 * @param {String} email 
 * @param {String} password 
 * @param {String} fullName 
 * @param {Number} phoneNumber 
 */
const createCustomer = (email, password, fullName, phoneNumber) => {
  createAccount(email, password, fullName, phoneNumber, 'customer')
}

/**
 * Find account by email
 * @param {String} email
 */
const findByEmail = (email) => {
  return AccountModel.findOne({
    email: email
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
  findByEmail,
  findById
}
