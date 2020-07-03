import { Router, Request, Response } from "express";
import { todoRoutes } from "./todo";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";

const apiRouter = new Router();

apiRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).send("API Root: ACTIVE").end();
});

apiRouter.use("/todo", todoRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use("/users", userRoutes);

export default apiRouter;
