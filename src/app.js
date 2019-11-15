// Import required packages
const debug = require('debug')('app');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');

// Load configuration files
const port = process.env.PORT || 3000; // Establish port to be used

// Instantiate required packages
const app = express(); // Instantiate the express module
// const db = require('../config/mongo');

// Define application settings
app.use(morgan('tiny')); // Enable light logging from express.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routing
app.use('/', require('./routes/apiRouter')());

// Begin listening
app.listen(port, () => {
  debug(`${chalk.green('Listening')} on port ${chalk.red(port)}.`);
});
