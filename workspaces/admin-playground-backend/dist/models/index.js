"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const getFiles_1 = __importDefault(require("../utils/file/getFiles"));
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database`)[env];
const db = {};
let sequelize;
const modelsFile = getFiles_1.default(path_1.default.join(__dirname, '../modules/**/models/*.js'));
console.log({ modelsFile });
if (config.use_env_variable) {
    sequelize = new sequelize_1.Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
modelsFile.forEach(modelFile => {
    const model = sequelize.import(modelFile);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
//# sourceMappingURL=index.js.map