import Router from 'express'

const RequestLoggerMiddleware = Router()

RequestLoggerMiddleware.all('/', (req, res, next) => {
  console.log()
  console.log(new Date().toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
  )
  console.log(req.method, req.originalUrl)
  console.log('Headers:', req.headers)
  if (req.method == 'GET') {
    console.log('Params:', req.params)
  }
  else {
    console.log('Body:', req.body)
  }
  console.log()
  next();
})

export default RequestLoggerMiddleware