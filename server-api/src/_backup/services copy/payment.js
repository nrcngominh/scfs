const createBill = (order) => {
  const billId = 'B001221'
  const momoQrCode = 'https://test-payment.momo.vn/pay/store/MOMOIQA420180417-storeid01?a=10000&b=B001221&s=601a7280711dd72bfae8c365801f5e257311a1ebd8779cf3bc4ac57c4002a978'

  // Return value for router
  return {
    billId: billId,
    momoQrCode: momoQrCode,
    amount: order.amount
  }
}

export default {
  createBill
}
