import { Request, Response } from "express";

import emailAccountService from "../services/emailAccountService";

class EmailAccountController {
  async createEmailAccount(req: Request, res: Response) {
    try {
      const emailAccount = await emailAccountService.createEmailAccount(req.body);
      res.status(201).json(emailAccount);
    } catch (error) {
      console.error("Error creating email account:", error);
      res.status(500).json({ error: "An error occurred while creating the email account" });
    }
  }
}

export default new EmailAccountController();
