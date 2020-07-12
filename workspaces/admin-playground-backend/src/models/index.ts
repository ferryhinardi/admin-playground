import { Sequelize } from 'sequelize';
import path from 'path';
import getFiles from '../utils/file/getFiles';

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database`)[env];
const db: { sequelize?: Sequelize, Sequelize?: typeof Sequelize } = {};
let sequelize: Sequelize;

const modelsFile = getFiles(path.join(__dirname, '../modules/**/models/*.ts'));

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
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
db.Sequelize = Sequelize;

export default db;
