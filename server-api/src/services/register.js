import AccountRepo from '@/repositories/account'
import CartRepo from '@/repositories/cart'
import bcrypt from 'bcryptjs';

/**
 * Register for customer
 * @param {String} email 
 * @param {String} password 
 * @param {String} fullName 
 * @param {String} phoneNumber 
 */
const customer = async (email, password, fullName, phoneNumber) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const account = await AccountRepo.createCustomer(email, hashedPassword, fullName, phoneNumber)
  await CartRepo.create(account._id)
}

export default {
  customer
}