"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => queryInterface.createTable('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.INTEGER
        },
        username: {
            allowNull: false,
            type: sequelize_1.STRING
        },
        password: {
            allowNull: false,
            type: sequelize_1.STRING
        },
        full_name: {
            allowNull: true,
            type: sequelize_1.STRING
        },
        email: {
            allowNull: true,
            type: sequelize_1.STRING
        },
        photo_url: {
            allowNull: true,
            type: sequelize_1.STRING
        },
        created_at: {
            allowNull: false,
            type: sequelize_1.DATE
        },
        updated_at: {
            allowNull: false,
            type: sequelize_1.DATE
        },
        deleted_at: {
            allowNull: true,
            type: sequelize_1.DATE
        }
    }),
    down: (queryInterface) => queryInterface.dropTable('users')
};
//# sourceMappingURL=001_create_table_users.js.map