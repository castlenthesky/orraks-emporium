import * as express from 'express';

function router() {
  const mainRouter = express.Router();
  mainRouter.route('/')
    .get((req, res) => {
      return res.status(201).send('Welcome to the app.')
    })
  mainRouter.use('/materials', require('./materials')());
  mainRouter.use('/users', require('./userRouter')());
  return mainRouter;
}

module.exports = router;
