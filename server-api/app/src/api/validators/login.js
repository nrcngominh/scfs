import { body, validationResult } from 'express-validator'

const rules = [
  body('email').notEmpty(),
  body('password').notEmpty()
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