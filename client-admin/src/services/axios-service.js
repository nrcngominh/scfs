import axios from 'axios'

const AxiosService = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN || 'http://localhost/'
})

export default AxiosService