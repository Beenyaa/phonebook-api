import { Router } from "express";
import ContactController from "../controller/contactController";
const router = Router();

router.get("/contact", ContactController.listAll);
router.get("/contact/:id", ContactController.getOneById);
router.post("/contact", ContactController.newContact);
router.put("/contact/:id", ContactController.updateContact);
router.delete("/contact/:id", ContactController.deleteContact);


export default router;