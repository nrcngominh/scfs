import axios from 'axios'

const getAllUnserved = async () => {
    return axios.get('/api/admin/order')
}

const serveOrder = async (order) => {
    return axios.put('/api/admin/order', order)
}

export default {
    serveOrder,
    getAllUnserved
}