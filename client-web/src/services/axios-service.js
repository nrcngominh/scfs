import axios from 'axios'

const axios = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN || 'http://localhost/'
})

export default axios
