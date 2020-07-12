import { Sequelize, DataTypes } from 'sequelize';
import path from 'path';
import getFiles from '../utils/file/getFiles';
import { DB, CustomModelType } from '../modules/shared/typescriptType/ModelType';

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database`)[env];
const db: DB = {};
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
  const model = require(modelFile).default;
  model(sequelize, DataTypes)
    .sync({ force: false , alter : true })
    .then((model: CustomModelType) => {
      db[model.name] = model;
    });
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
