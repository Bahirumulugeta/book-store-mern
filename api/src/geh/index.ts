import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";
import config from "../configs";

// Error for development environment
const sendDevError = (err: AppError, res: Response) => {

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    errorStack: err.stack,
  });
};

// Error for production environment
const sendProdError = (err: AppError, res: Response) => {

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "ERROR",
      message: "Oops! Unknown error happened. Please try again",
    });
  }
};

// Error handler middleware
const geh = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Error status and status code
  err.status = err.status || "ERROR";
  err.statusCode = err.statusCode || 500;
  // Casting error
  if (err.name === "CastError") err = new AppError("Resource not found", 401);

  // Token invalid
  if (err.name === "JsonWebTokenError") err = new AppError("Please login", 401);

  // Token expired
  if (err.name === "TokenExpiredError") err = new AppError("Please login", 401);

  // Send development error for development environment
  if (config.env === "Development") sendDevError(err, res);

  // Send production error for production environment
  if (config.env === "Production") sendProdError(err, res);
};

// Export geh
export default geh;
