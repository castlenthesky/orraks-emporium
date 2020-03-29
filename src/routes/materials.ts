import * as express from 'express';
import * as mongoose from 'mongoose';

function router() {
  const router = express.Router();
  const Material = require('../models/materials')

  router.route('/')
    .get((req, res) => {
      const { query } = req;
      // Get logic
      Material.find(query, (err, materials) => {
        if (err) {
          return res.send(err);
        }
        return res.json(materials)
      })
    })
    .post((req, res) => {
      return res.status(201).json({
        message: 'post'
      });
    });
  

  return router;
}

module.exports = router;
