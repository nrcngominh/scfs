import { customerAuth, vendorAuth } from '@/api/auth'
import Vue from 'vue'
import axios from 'axios'


const auth = async (authMethod) => {
  try {
    const accessToken = Vue.$cookies.get('accessToken')
    if (!accessToken) {
      return false
    }
    axios.defaults.headers['x-access-token'] = accessToken
    await authMethod()
    return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}

const customer = async () => {
  return await auth(customerAuth)
}

const vendor = async () => {
  return await auth(vendorAuth)
}

export default {
  customer,
  vendor
}