import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string()
  .trim()
  .min(3)
  .max(30)
  .required(),
  email: Joi.string()
  .trim()
  .lowercase()
  .email()
  .required(),
  subject: Joi.string()
  .trim()
  .min(3)
  .max(100)
  .required(),
  message: Joi.string()
  .trim()
  .min(3)
  .max(1000)
  .required(),
  
})

export default contactSchema;