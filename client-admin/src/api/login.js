const axios = require('axios')

const adminLogin = async (email, password) => {
  return await axios.post("/api/login/admin", {
    email: email,
    password: password
  })
}

export {
  adminLogin
}