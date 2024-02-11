import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import config, { DBConfig, DBConfigAttributes } from '../config/config';

const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';
const configEnv = config[env as keyof DBConfig];
const db: { [key: string]: any } = {};

let sequelize: Sequelize;
if (configEnv.use_env_variable) {
  sequelize = new Sequelize(process.env[configEnv.use_env_variable]!, configEnv);
} else {
  sequelize = new Sequelize(configEnv.database as string, configEnv.username as string, configEnv.password, configEnv);
}

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      !file.endsWith('.test.ts')
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
