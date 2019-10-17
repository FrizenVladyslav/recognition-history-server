import * as dotenv from 'dotenv';
import * as path from 'path';

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('../.env') });

export default {
  PORT: process.env.PORT || 8080,
  IS_PODUCTION: process.env.NODE_ENV === 'production',
  DB: {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: +process.env.DB_PORT || 3306,
    USERNAME: process.env.DB_USERNAME || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'root',
    NAME: process.env.DB_NAME,
  },
};
