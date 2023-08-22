import EmailAccount from "../models/EmailAccount";
import { emailAccountSchema } from "../validation/emailAccountValidation";

class EmailAccountService {
  async createEmailAccount(data: any) {
    // Validate input data using Joi schema
    await emailAccountSchema.validateAsync(data);

    // Create email account in the database
    const emailAccount = await EmailAccount.create(data);
    return emailAccount;
  }
}

export default new EmailAccountService();
