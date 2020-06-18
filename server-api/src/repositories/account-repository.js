import AccountModel from '../models/account-model'

/*
 * Create new user in database
 */
const create = async(email, hashedPassword) => {
  return AccountModel.create({
    email: email,
    password: hashedPassword,
    type: 'customer'
  })
}

/*
 * Find user in database by email
 */
const findByEmail = async (email) => {
  return AccountModel.findOne({
    email: email
  })
}

export default {
  create,
  findByEmail
}
