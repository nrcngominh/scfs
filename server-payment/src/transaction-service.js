import TransactionRepo from "./transaction-repository"

// Random number
const randomNumber = (numOfDigits) => {
  return Math.floor(Math.random() * Math.pow(10, numOfDigits)).toString().padStart(numOfDigits, '0')
}

// Random MOMO transaction ID
const getRandomTransId = () => {
  return randomNumber(10)
}

// Random phone number
const phonePrefix = [
  '086', '096', '097', '098',
  '032', '033', '034', '035', '036', '037', '038', '039',
  '089', '090', '093', '070', '079', '077', '076', '078',
  '088', '091', '094', '083', '084', '085', '081', '082',
  '092', '056', '058',
  '099', '059'
]
const getPhoneNumberPrefix = () => {
  return phonePrefix[Math.floor(Math.random() * phonePrefix.length)]
}

const fakePhoneNumber = () => {
  return getPhoneNumberPrefix() + randomNumber(7)
}

const create = async (billId, amount) => {
  const momoTransId = getRandomTransId()
  const customerPhoneNumber = fakePhoneNumber()
  return TransactionRepo.create({
    billId: billId,
    momoTransId: momoTransId,
    amount: amount,
    customerPhoneNumber: customerPhoneNumber
  })
}

const getAll = async () => {
  return TransactionRepo.findAll()
}

const makeTransactionPaid = async (momoTransId) => {
  return TransactionRepo.updatePaid(momoTransId)
}

export default {
  create,
  getAll,
  makeTransactionPaid
}