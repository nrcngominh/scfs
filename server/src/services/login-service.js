import AccountModel from '../models/account-model'

export default {
  async login (email, password) {
    return await AccountModel.exists({
      email: email,
      password: password
    })
  }
}