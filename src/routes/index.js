const debug = require('debug')('app:api');
const express = require('express');
// const apiController = require('../../controllers/apiController');

function apiRouter() {
  const apiRouter = express.Router();
  
  apiRouter.route('/')
    .get((req, res) => {
      return res.send('Welcome to the main page of the appliation API.');
    });

  return apiRouter;
}

module.exports = apiRouter;