"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const UpperCaseDirective_1 = __importDefault(require("./UpperCaseDirective"));
const directivesArray = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, "../../modules/**/directives/*.ts"), {
    extensions: [".ts"],
});
const directives = directivesArray.concat([UpperCaseDirective_1.default]);
exports.default = merge_graphql_schemas_1.mergeResolvers(directives);
//# sourceMappingURL=index.js.map