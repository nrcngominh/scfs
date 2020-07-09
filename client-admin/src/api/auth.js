const axios = require('axios')

const adminAuth = async () => {
  return await axios.get("/api/auth/admin");
}

export {
  adminAuth
}
