const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envConfig = dotenv.config();

if (!envConfig) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  appurl: process.env.APPURL,
  port: parseInt(process.env.PORT) || 8081,
  mongoURI: process.env.MONGOURI,
  username: process.env.USERNAME,
}
