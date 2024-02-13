"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const db_1 = __importDefault(require("./db"));
const http_1 = __importDefault(require("http"));
exports.default = () => {
    const server = http_1.default.createServer(server_1.default);
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
    const db = (0, db_1.default)();
    process.on("SIGINT", () => {
        server.close();
        db.close();
    });
};
