import Joi from "joi";

export const createBookValidation = Joi.object({
  title: Joi.string().required(),
  image:Joi.string(),
  price: Joi.number().required(),
  writer: Joi.required(),
  tags:Joi.array(),
});
