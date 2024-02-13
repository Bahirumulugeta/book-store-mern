import Joi from "joi";
import { RequestHandler } from "express";
import AppError from "./appError";

export default (schema: Joi.Schema): RequestHandler => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      return next(new AppError(error.message, 400));
    }
    // req.value = value;
    next();
  };
};
