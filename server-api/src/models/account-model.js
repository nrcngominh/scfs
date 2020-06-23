import mongoose from 'mongoose'

const AccountSchema = mongoose.Schema({
  email: String,
  password: String,
  fullName: String,
  phoneNumber: String,
  type: String
})
const AccountModel = mongoose.model('Account', AccountSchema, 'account')

export default AccountModel
