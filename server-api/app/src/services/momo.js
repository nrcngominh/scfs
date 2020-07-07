import crypto from 'crypto'

const MOMO_SECRET_KEY = '1u6ECv61QSLpPVWzTVQS0pO0vIAU5v5Q'
const MOMO_STORE_SLUG = 'MOMO1HG120200624-123321123'
const MOMO_PAY_DOMAIN = `https://test-payment.momo.vn`

const hash = (data) => {
  return crypto.createHmac('sha256', MOMO_SECRET_KEY)
    .update(data)
    .digest('hex')
}

const hashPayQrCode = (amount, billId) => {
  const data = `storeSlug=${MOMO_STORE_SLUG}&amount=${amount}&billId=${billId}`
  return hash(data)
}

const rawQrCodeGenerator = (amount, billId, signature) => {
  return `${MOMO_PAY_DOMAIN}/pay/store/${MOMO_STORE_SLUG}?a=${amount}&b=${billId}&s=${signature}`
}

const generatePayQrCode = (amount, billId) => {
  const signature = hashPayQrCode(amount, billId)

  return rawQrCodeGenerator(amount, billId, signature)
}

const hashNotifyResponse = (amount, message, momoTransId, partnerRefId, status) => {
  const data = `amount=${amount}&message=${message}&momoTransId=${momoTransId}&partnerRefId=${partnerRefId}&status=${status}`
  return hash(data)
}

const notifyQrCodeReponse = (data) => {
  const status = 0
  const message = "Thành công"
  const amount = data.amount
  const partnerRefId = data.partnerRefId
  const momoTransId = data.momoTransId
  const signature = hashNotifyResponse(amount, message, momoTransId, partnerRefId, status)

  const resData = {
    status: status,
    message: message,
    amount: amount,
    partnerRefId: partnerRefId,
    momoTransId: momoTransId,
    signature: signature
  }

  return resData
}

export default {
  notifyQrCodeReponse,
  generatePayQrCode
}