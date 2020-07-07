import axios from 'axios'

const customerAuth = async () => {
  return await axios.get('/api/auth/customer')
}

const vendorAuth = async () => {
  return await axios.get('/api/auth/vendor')
}

const customerGoogleLoginAuth = async code => {
  return await axios.get('/api/auth/customer/google', {
    params: {
      code: code
    }
  })
}

export {
  customerAuth,
  vendorAuth,
  customerGoogleLoginAuth
}