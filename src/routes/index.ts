import { Router } from "express";
import contact from "./contact";

const routes = Router();

routes.use("/api", contact);

export default routes;