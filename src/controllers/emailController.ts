import { Request, Response } from "express";
import emailService from "../services/emailService";

class EmailController {
  async sendEmail(req: Request, res: Response) {
    try {
      const emailInfo = await emailService.sendEmail(req.body);
      res.status(200).json(emailInfo);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending the email" });
    }
  }
}

export default new EmailController();
