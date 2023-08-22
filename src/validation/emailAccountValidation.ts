import Joi from "joi";

const emailAccountSchema = Joi.object({
  fromName: Joi.string().required(),
  fromEmail: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  smtpHost: Joi.string().required(),
  smtpPort: Joi.number().required(),
  smtpOption: Joi.string().valid("ssl", "tls", "none").required(),
  messagePerDay: Joi.number().required(),
  timegap: Joi.number().required(),
  setReply: Joi.boolean().required(),
  useDifferentEmail: Joi.boolean().required(),
  imapHost: Joi.string().allow("").optional(),
  imapPort: Joi.number().allow(null).optional(),
  imapOption: Joi.string().valid("ssl", "tls", "none").allow("").optional(),
});

export { emailAccountSchema };
