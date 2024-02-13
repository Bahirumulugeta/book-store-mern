"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const validation_1 = require("./validation");
const controller_1 = require("./controller");
const validator_1 = __importDefault(require("../../utils/validator"));
router
    .route("/")
    .post((0, validator_1.default)(validation_1.createUserValidation), controller_1.createUser)
    .get(controller_1.getAllUsers);
exports.default = router;
