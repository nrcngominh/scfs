import axios from 'axios'

const getAllUnserved = async () => {
    return axios.get('/api/order/admin')
}

const serveOrder = async (order) => {
    return axios.put('/api/order/admin', order)
}

export default {
    serveOrder,
    getAllUnserved
}