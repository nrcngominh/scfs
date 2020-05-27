import AccountModel from '../models/account-model'
import bcrypt from 'bcrypt';

export default {
  async login (email, password) {
    const account = await AccountModel.findOne({
      email: email
    })
    if (!account)
      return false;
    if (bcrypt.compareSync(password, account.password))
      return account;
    return false;
  }
}
