import mongoose from 'mongoose'

const AccountSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone_number: String,
  date_of_birth: Date,
  type: String
})
const AccountModel = mongoose.model('Account', AccountSchema, 'account')

export default AccountModel