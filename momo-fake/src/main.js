import express from 'express'
import cors from 'cors'
import request from 'request'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

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

// Fake customer and payment
const performFakeCustomerPayment = () => {
    const customerNumber = getPhoneNumberPrefix() + randomNumber(7)

    const clientServerOptions = {
        uri: 'http://127.0.0.1:3000/api/momo',
        body: JSON.stringify({
            customerNumber: customerNumber 
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    request(clientServerOptions, function (error, response) {
        console.log(error, response.body);
    });
}

app.post('/test', async (req, res) => {
    // Send back Momo Id to request server
    const momoTransId = getRandomTransId()
    res.send({
        momoTransId: momoTransId
    })

    // Sleep
    const sleepTimeInSeconds = 5
    await new Promise(r => setTimeout(r, sleepTimeInSeconds * 1000))

    // Fake a customer to complete payment, then response to server
    performFakeCustomerPayment()
})

app.listen(4000, () => {
    console.log('MOMO server is running on port 4000');
})
