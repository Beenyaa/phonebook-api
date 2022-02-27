import { Router } from "express";
import AuthController from "../controller/authController";

const router = Router();
//Login route
router.post("/refresh_token", AuthController.login);

export default router;