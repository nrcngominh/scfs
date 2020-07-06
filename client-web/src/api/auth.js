import axios from 'axios'

const authGoogle = async code => {
  const res = await axios.post('/api/auth/customer/google', {
    code: code
  })
  return res.data
}

export {
  authGoogle
}