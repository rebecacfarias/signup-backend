const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  company: Joi.string().required(),
  jobTitle: Joi.string(),
  workEmail: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = userSchema;