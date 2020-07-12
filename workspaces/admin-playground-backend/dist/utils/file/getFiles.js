"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
exports.default = (dir) => {
    return glob_1.default.sync(dir);
};
//# sourceMappingURL=getFiles.js.map