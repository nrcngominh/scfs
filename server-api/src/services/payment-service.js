import request from 'request'

export default {
  createBill(amount) {
    const billId = 'B001221'
    const momoQrCode = 'https://test-payment.momo.vn/pay/store/MOMOIQA420180417-storeid01?a=10000&b=B001221&s=601a7280711dd72bfae8c365801f5e257311a1ebd8779cf3bc4ac57c4002a978'

    // Send request to MOMO to fake a customer payment
    const clientServerOptions = {
        uri: 'http://127.0.0.1:4000/test/',
        body: JSON.stringify({
            billId: billId,
            amount: amount
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error, response.body);
    });

    // Return value for router
    return {
          billId: billId,
          momoQrCode: momoQrCode
    }
  }
}
