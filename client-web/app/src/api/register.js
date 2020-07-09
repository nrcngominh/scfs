import axios from 'axios'

const customerRegister = async (registerData) => {
  return await axios.post('/api/register/customer', {
    email: registerData.email,
    password: registerData.password
  })
}

export {
  customerRegister,
}