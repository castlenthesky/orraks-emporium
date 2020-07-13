import { Router } from "express";
import * as controller from "./controller";

const materialRoutes = new Router();

materialRoutes
  .route("/random") // Handle routes to provide a random record
  .get([controller.getRandom]);

materialRoutes
  .route("/") // Handle routes for getting and posting records
  .get([controller.get])
  .post([controller.post])
  .put([controller.put]);

materialRoutes
  .route("/:materialID") // Handle routes for specific records
  .all([controller.findByID])
  .get([controller.getByID])
  .patch([controller.patchByID])
  .delete([controller.deleteByID]);

export { materialRoutes };
