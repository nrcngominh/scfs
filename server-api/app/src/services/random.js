// Random number
const randomNumber = (numOfDigits) => {
  return Math.floor(Math.random() * Math.pow(10, numOfDigits)).toString().padStart(numOfDigits, '0')
}

export {
  randomNumber
}