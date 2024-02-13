"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env" });
exports.default = {
    env: process.env.NODE_ENV,
    mongoDb: process.env.MONGODB_REMOTE
};
