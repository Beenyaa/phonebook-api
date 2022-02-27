import { Router } from "express";
import { isAuth } from "../middleware/isAuth";
import ContactController from "../controller/contactController";
const router = Router();

router.get("/contact", ContactController.listAll);
router.get("/contact/:id", ContactController.getOneById);
router.post("/contact", [isAuth], ContactController.newContact);
router.put("/contact/:id", [isAuth], ContactController.updateContact);
router.delete("/contact/:id", [isAuth], ContactController.deleteContact);


export default router;