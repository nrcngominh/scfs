import axios from 'axios'

const customerLogin = async (loginData) => {
  const res = await axios.post('/api/login/customer', {
    email: loginData.email,
    password: loginData.password
  })
  return res.data
}

const customerRegister = async (registerData) => {
  const res = await axios.post('/api/register/customer', {
    email: registerData.email,
    password: registerData.password
  })
  return res.data
}

const customerAuth = async () => {
  const res = await axios.post('/api/auth/customer')
  return res.data
}

export {
  customerLogin,
  customerRegister,
  customerAuth
}