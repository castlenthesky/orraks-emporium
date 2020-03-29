import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

export default async ({ app }: { app: express.Application}) => {
  app.get('/status',  (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  app.use(cors());
  app.use(require('morgan')('tiny'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', require('../routes/index')());

  return app;
}