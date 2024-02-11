import 'dotenv/config';
import { Dialect } from 'sequelize/types';

export interface DBConfigAttributes {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  dialect: Dialect | undefined;
  use_env_variable?: string
}

export interface DBConfig {
  development: DBConfigAttributes;
  // local: DBConfigAttributes;
  // production: DBConfigAttributes;
}

const config: DBConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
  },
  // local: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
  // },
};

export default config;
