import axios from 'axios'

const getCart = async () => {
  const res = await axios.get('/api/customer/cart')
  return res.data
}

const updateCart = async (cart) => {
  const res = await axios.put('/api/customer/cart', cart)
  return res.data
}

export {
  getCart,
  updateCart
}