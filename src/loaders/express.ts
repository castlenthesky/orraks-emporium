import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import todoRoutes from '../services/todo'

export default async function expressLoader ():Promise<express.Application> {
  const app = express();
  
  // Configure application
  app.enable('trust proxy');
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Configure status endpoints
  app.get('/status',  (req: express.Request, res: express.Response) => { 
    res.status(200).send('connected').end(); 
  });
  app.head('/status', (req: express.Request, res: express.Response) => { 
    res.status(200).end(); 
  });

  // Configure application routes
  app.use('/todo', todoRoutes);

  return app;
}
