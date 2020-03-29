import * as express from 'express';

function router() {
  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      const { query } = req;
      // Get logic
    })
    .post((req, res) => {
      return res.status(201).json({
        message: 'post'
      });
    });
  

  return router;
}

module.exports = router;
