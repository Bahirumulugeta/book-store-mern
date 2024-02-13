"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = __importDefault(require("./appError"));
exports.default = (schema) => {
    return (req, res, next) => {
        const { value, error } = schema.validate(req.body);
        if (error) {
            return next(new appError_1.default(error.message, 400));
        }
        req.value = value;
        next();
    };
};
