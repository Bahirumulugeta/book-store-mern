"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const configs_1 = __importDefault(require("../configs"));
exports.default = () => {
    mongoose_1.default.connect(configs_1.default.mongoDb).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log(error);
    });
    const mongoDb = mongoose_1.default.connection;
    mongoDb.on("error", (err) => {
        console.log("Error occurred: ", err);
    });
    mongoDb.on("disconnected", () => {
        console.log("Disconnected from mongoDB");
    });
    return mongoDb;
};
