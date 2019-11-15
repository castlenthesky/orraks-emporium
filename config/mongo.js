// Import required packages
const debug = require('debug')('app:mongo');
const mongoose = require('mongoose');

const username = process.env.MONGOUSER;
const password = process.env.MONGOPASS;
const server = process.env.MONGOSERVER;

module.exports = (
  mongoose
    .connect(
      `mongodb+srv://${username}:${password}@${server}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true,
        ssl: true,
        authSource: 'admin',
        w: 'majority',
      },
    )
    .then(() => {
      console.log('MongoDB Connected...');
      return mongoose.connection;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
);
