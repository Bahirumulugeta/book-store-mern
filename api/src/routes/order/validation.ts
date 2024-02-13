import Joi from "joi";

export const createOrderValidation = Joi.object({
  user_id: Joi.number().required(),
  book_id: Joi.number().required(),
  address: Joi.string().required(),
  quantity: Joi.number().required(),
  total_price: Joi.number().required(),
});
