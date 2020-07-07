/**
 * Log middleware
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next
 */
const log = async (req, res, next) => {
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
}

export default {
  log
}