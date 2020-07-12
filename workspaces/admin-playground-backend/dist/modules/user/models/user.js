"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
function getHashedPassword(password) {
    return bcrypt_1.default.hashSync(password, 8);
}
exports.default = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: sequelize_1.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: sequelize_1.STRING,
        fullName: {
            type: sequelize_1.STRING,
            field: 'full_name'
        },
        password: sequelize_1.STRING,
        email: sequelize_1.STRING,
        photoUrl: {
            type: sequelize_1.STRING,
            field: 'photo_url'
        },
        createdAt: {
            field: 'created_at',
            type: sequelize_1.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: sequelize_1.DATE
        },
        deletedAt: {
            field: 'deleted_at',
            type: sequelize_1.DATE
        }
    }, {
        tableName: 'users',
        deletedAt: 'deleted_at',
        paranoid: true,
        hooks: {
            beforeCreate: (user) => {
                if (user.password) {
                    try {
                        const hashedPassword = getHashedPassword(user.password);
                        user.password = hashedPassword;
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return user;
            },
            beforeUpdate: (user) => {
                if (user.password) {
                    try {
                        const hashedPassword = getHashedPassword(user.password);
                        user.password = hashedPassword;
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return user;
            },
        },
    });
    return User;
};
//# sourceMappingURL=user.js.map