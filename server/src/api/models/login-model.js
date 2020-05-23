import mongoose from 'mongoose'

const LoginSchema = mongoose.Schema({
  username: String,
  password: String
})
const LoginModel = mongoose.model('Login', LoginSchema, 'account')

export default LoginModel