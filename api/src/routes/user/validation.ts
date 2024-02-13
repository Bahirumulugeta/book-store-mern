import Joi from "joi";

export const createUserValidation = Joi.object({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.required(),
});
