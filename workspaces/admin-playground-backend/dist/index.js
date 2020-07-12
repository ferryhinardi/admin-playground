"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const app_1 = require("./config/app");
const port = process.env.PORT || "4000";
server_1.default.listen({
    port,
}, () => {
    console.log(`Server is running on ${app_1.config.API_URL}`);
});
//# sourceMappingURL=index.js.map