const axios = require('axios')

const adminAuth = async () => {
  return await axios.get("/api/auth/admin");
}

module.exports = {
  adminAuth
}
