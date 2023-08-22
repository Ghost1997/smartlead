import Joi from "joi";

const emailSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
});

export { emailSchema };
