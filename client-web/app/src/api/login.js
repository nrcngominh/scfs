import axios from 'axios'

const customerLogin = async (loginData) => {
  return await axios.post('/api/login/customer', {
    email: loginData.email,
    password: loginData.password
  })
}

const vendorLogin = async (loginData) => {
  return await axios.post('/api/login/customer', {
    email: loginData.email,
    password: loginData.password
  })
}

export {
  customerLogin,
  vendorLogin,
}