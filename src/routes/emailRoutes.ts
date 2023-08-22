import express from "express";
import emailAccountController from "../controllers/EmailAccountController";
import emailController from "../controllers/emailController";
const router = express.Router();

router.post("/email-accounts", emailAccountController.createEmailAccount);
router.post("/send-email", emailController.sendEmail);
export default router;
