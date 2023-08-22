import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

enum EmailOption {
  SSL = "ssl",
  TLS = "tls",
  NONE = "none",
}

class EmailAccount extends Model {
  public id!: number;
  public fromName!: string;
  public fromEmail!: string;
  public username!: string;
  public password!: string;
  public smtpHost!: string;
  public smtpPort!: number;
  public smtpOption!: EmailOption;
  public messagePerDay!: number;
  public timegap!: number;
  public setReply!: boolean;
  public useDifferentEmail!: boolean;
  public imapHost!: string;
  public imapPort!: number;
  public imapOption!: EmailOption;
  public createdAt!: Date;
  public updatedAt!: Date;
}

EmailAccount.init(
  {
    fromName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smtpHost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smtpPort: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    smtpOption: {
      type: DataTypes.ENUM(...Object.values(EmailOption)),
      allowNull: false,
    },
    messagePerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timegap: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    setReply: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    useDifferentEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imapHost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imapPort: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imapOption: {
      type: DataTypes.ENUM(...Object.values(EmailOption)),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "EmailAccount",
  }
);

export default EmailAccount;
