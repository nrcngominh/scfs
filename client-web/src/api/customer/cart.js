import axios from 'axios'

const getCart = async () => {
  return await axios.get('/api/customer/cart')
}

const updateCart = async (cart) => {
  return await axios.put('/api/customer/cart', cart)
}

export {
  getCart,
  updateCart
}