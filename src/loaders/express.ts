import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import requestLogger from '../middlewares/requestLogger'

// User-defined application routes
import {todoRoutes} from "../services/todo";

export default async function expressLoader(): Promise<express.Application> {
  const app = express();

  // Configure application
  app.enable("trust proxy");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Configure status endpoints
  app.get("/status", (req: express.Request, res: express.Response) => {
    res.status(200).send("connected").end();
  });
  app.head("/status", (req: express.Request, res: express.Response) => {
    res.status(200).end();
  });

  // Setup user-defined middlewares
  app.use([
    requestLogger,
  ])

  // Setup user-defined application routes
  app.use("/todo", todoRoutes);

  return app;
}
