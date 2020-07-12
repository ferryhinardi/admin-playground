"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userData = [{ name: "user1" }, { name: "user2" }];
exports.default = {
    Query: {
        users() {
            return userData;
        },
        user(parent, args) {
            return userData.filter((user) => user.name === args.name);
        },
    },
};
//# sourceMappingURL=user-resolvers.js.map