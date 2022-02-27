import { Router } from "express";
import auth from "./auth";
import contact from "./contact";

const routes = Router();

routes.use("/api", auth);
routes.use("/api", contact);

export default routes;