import { Router } from "express";
import JsonWebToken from "jsonwebtoken";
const router = Router();
import bcrypt from "bcrypt";
import { send } from "../helper/responseHelper.js";
import RESPONSE from "../configs/global.js";
import initAccountData from "../models/account.js";
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const account = await initAccountData();
    const user = await account.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = JsonWebToken.sign(
        { id: user.account_id, username: user.username },
        process.env.TOKEN
      );
      return send(res, RESPONSE.SUCCESS, {token,role:user.role});
    } else {
      return send(res, RESPONSE.NotExist);
    }
    console.log(user);
  } catch (error) {
    console.log(error.message);
    return send(res, RESPONSE.unkownEror);
  }
});
export default router;
