import { customerLogin, vendorLogin } from '@/api/login'
import { customerGoogleLoginAuth } from '@/api/auth'
import Vue from 'vue'
import axios from 'axios'

const setAccessToken = (accessToken) => {
  Vue.$cookies.set('accessToken', accessToken)
  axios.defaults.headers['x-access-token'] = accessToken
}

const customer = async (loginData) => {
  const res = await customerLogin(loginData)
  setAccessToken(res.data.accessToken)
}

const vendor = async (loginData) => {
  const res = await vendorLogin(loginData)
  setAccessToken(res.data.accessToken)
}

const customerGoogle = async (code) => {
  const res = await customerGoogleLoginAuth(code)
  setAccessToken(res.data.accessToken)
}

export default {
  customer,
  vendor,
  customerGoogle
}