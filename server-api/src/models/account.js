import mongoose from 'mongoose'

const AccountSchema = mongoose.Schema({
  email: { type: String, required: true, index: true, unique: true },
  password: { type: String },
  service: {
    type: String, default: 'normal',
    enum: ['normal', 'google']
  },
  phoneNumber: { type: String, index: true, unique: true, sparse: true },
  fullName: { type: String },
  type: {
    type: String,
    required: true,
    enum: ['customer', 'admin', 'vendor']
  }
})

const AccountModel = mongoose.model('Account', AccountSchema, 'account')

export default AccountModel
