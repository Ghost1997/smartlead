import nodemailer from "nodemailer";
import { emailSchema } from "../validation/emailValidation";
import EmailAccount from "../models/EmailAccount";

class EmailService {
  async sendEmail(data: any) {
    try {
      // Validate input data using Joi schema
      await emailSchema.validateAsync(data);
      const latestEmailAccount = await EmailAccount.findOne({
        order: [["createdAt", "DESC"]],
        raw: true,
      });

      if (latestEmailAccount) {
        const { fromEmail, smtpHost, username, password } = latestEmailAccount;
        const copyEmail = process.env.CC_EMAIL;
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: 587,
          secure: false,
          auth: {
            user: username,
            pass: password,
          },
        });

        // Send the email
        const info = await transporter.sendMail({
          from: fromEmail,
          to: data.to,
          subject: data.subject,
          text: data.body,
          cc: copyEmail,
          bcc: copyEmail,
        });

        return { success: true, data: info };
      } else {
        return {
          data: {
            success: false,
            message: "Account Not Found",
          },
        };
      }
    } catch (error) {
      return {
        data: {
          success: false,
          message: error,
        },
      };
    }
  }
}

export default new EmailService();
