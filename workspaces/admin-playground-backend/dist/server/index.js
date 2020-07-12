"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const context_1 = __importDefault(require("./context"));
const directives_1 = __importDefault(require("./directives"));
const opts = {
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    context: context_1.default,
    schemaDirectives: directives_1.default,
    introspection: true,
    playground: process.env.NODE_ENV !== "production",
};
const server = new apollo_server_express_1.ApolloServer(opts);
const app = express_1.default();
app.use(cors_1.default({
    optionsSuccessStatus: 200,
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/health", (req, res) => res.sendStatus(200));
server.applyMiddleware({
    app,
    path: "/",
});
exports.default = app;
//# sourceMappingURL=index.js.map