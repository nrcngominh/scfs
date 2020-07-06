import axios from 'axios'

const payQrCode = async (cart, couponId) => {
  const res = await axios.post('/api/customer/pay/qr', {
    cart: cart,
    couponId: couponId
  })
  return res.data
}

export {
  payQrCode
}