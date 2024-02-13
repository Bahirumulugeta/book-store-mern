"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const command_1 = require("./command");
const hashPassword_1 = __importDefault(require("../../utils/hashPassword"));
const query_1 = require("./query");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.value;
        data.password = (0, hashPassword_1.default)(data.password);
        const user = yield command_1.User.createUser(data);
        // Response
        res.status(201).json({
            status: "Success",
            message: "User created successfully",
            data: {
                user,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield query_1.UserQueries.getAllUsers();
        res.status(200).json({
            statu: "Success",
            data: {
                users,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
