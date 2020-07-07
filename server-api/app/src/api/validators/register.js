import { body, validationResult } from 'express-validator'

const rules = [
  // Email is valid
  body('email').isEmail(),
  // Password has at least 8 character, with number, uppercase letter
  body('password').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
]

const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  res.status(422).send({ errors: errors.array() })
}

export default {
  rules,
  validator
}