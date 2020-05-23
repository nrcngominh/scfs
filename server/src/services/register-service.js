import AccountModel from '../models/account-model'

export default {
  async register (email, password) {
    return await AccountModel.create({
      email: email,
      password: password
    })
  }
}