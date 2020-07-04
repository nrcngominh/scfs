import { customerLogin, customerAuth } from '@/api/account'
import Vue from 'vue'
import axios from 'axios'

const login = async (loginData) => {
  const data = await customerLogin(loginData)
  Vue.$cookies.set('accessToken', data.accessToken)
  axios.defaults.headers['x-access-token'] = data.accessToken
}

const auth = async () => {
  try {
    await customerAuth()
    return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}

export {
  login,
  auth
}