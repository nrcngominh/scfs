import AccountModel from '../../models/account'

/*
 * Create new user in database
 */
const create = async (email, hashedPassword, fullName, phoneNumber) => {
  return AccountModel.create({
    email: email,
    password: hashedPassword,
    fullName: fullName,
    phoneNumber: phoneNumber,
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
