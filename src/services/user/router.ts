import { Router } from "express";
import * as controller from "./controller";

const userRoutes = new Router();

userRoutes
  .route("/") // Handle routes for getting and posting records
  .get([controller.get])
  .post([controller.post]);

userRoutes
  .route("/:username") // Handle routes for specific records
  .all([controller.findByUsername])
  .get([controller.getByUsername])
  .put([controller.putByUsername])
  .patch([controller.patchByUsername])
  .delete([controller.deleteByUsername]);

// userRoutes
// .route("/:username/projects/:projectID") // Handle routes for specific records
// .all([controller.findByUsername])
// .use()

export { userRoutes };
