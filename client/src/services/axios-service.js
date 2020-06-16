import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
    'http://localhost' : '/'

const AxiosService = axios.create({
    baseURL: baseURL
})

export default AxiosService