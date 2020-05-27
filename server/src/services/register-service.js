import AccountModel from '../models/account-model'
import bycript from 'bcrypt'

export default {
  async register (email, password) {

    const hashedPassword = bycript.hashSync(password, 10);
    return await AccountModel.create({
      email: email,
      password: hashedPassword,
      type: 'customer'
    })
  }
}
