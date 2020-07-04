import AccountRepo from '@repository/account'

const authorize = async (accountId, typeValidator) => {
  const account = await AccountRepo.findById(accountId)
  if (!account || !typeValidator(account)) {
    throw 'Unauthorized'
  }
  return account
}

/**
 * Authorize for customer
 * @param {String} accountId 
 * @returns {String} token
 */
const customer = async (accountId) => {
  return authorize(accountId, account => account.type === 'customer')
}

/**
 * Authorize for admin
 * @param {String} accountId 
 * @returns {String} token
 */
const admin = async (accountId) => {
  return authorize(accountId, account => account.type === 'admin')
}

/**
 * Authorize for vendor
 * @param {String} accountId 
 * @returns {String} token
 */
const vendor = async (accountId) => {
  return authorize(accountId, account => account.type === 'vendor')
}

export default {
  customer,
  admin,
  vendor
}