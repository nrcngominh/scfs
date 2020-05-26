import AccountModel from '../models/account-model'

export default {
  async login (email, password) {
    return await AccountModel.findOne({
      email: email,
      password: password
    })
  }
}
