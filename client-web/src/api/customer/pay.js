import axios from 'axios'

const payQrCode = async (cart, couponId) => {
  return await axios.post('/api/customer/pay/qr', {
    cart: cart,
    couponId: couponId
  })
}

export {
  payQrCode
}