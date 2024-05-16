import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";

const accountModel = {
  account_id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isactive: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
};

let account = null;
const initAccountData = async () => {
  try {
    if (account) return account;
    const sequelize = await getConnection();
    account = sequelize.define("acounts", accountModel, {
      freezeTableName: true,
    });
    await account.sync({ alter: true });
    return account;
  } catch (err) {
    console.log("modelerror", err.message);
  }
};

export default initAccountData;
