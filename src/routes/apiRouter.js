const express = require('express');
const apiController = require('../controllers/apiController');

function router() {
  const apiRouter = express.Router();
  const controller = apiController();

  apiRouter.route('/')
    .get(controller.get);

  return apiRouter;
}

module.exports = router;
