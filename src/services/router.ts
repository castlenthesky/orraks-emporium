import { Router, Request, Response, Next } from "express";
import { authRoutes } from "./auth";
import { userRoutes, registerRoute, profileRoute } from "./user";
import { todoRoutes } from "./todo";
import { materialRoutes } from "./materials";

const apiRouter = new Router();

apiRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).send("API Root: ACTIVE").end();
});

apiRouter.use("/register", registerRoute);
apiRouter.use("/profile", profileRoute);
apiRouter.use("/users", userRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use("/todo", todoRoutes);
apiRouter.use("/material", materialRoutes);

export { apiRouter };
