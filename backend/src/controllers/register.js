import { Router } from "express";
import { send, setErrResmg } from "../helper/responseHelper.js";
import initAccountData from "../models/account.js";
import RESPONSE from "../configs/global.js";
import bcrypt from "bcrypt";

const router = Router();
router.post("/", async (req, res) => {
  try {
    const { username, password ,role } = req.body;
    const account = await initAccountData();
    if (!username || username == "") {
      const updatedResponse = setErrResmg(RESPONSE.REQUIRED_PARAMS, "username");
      return send(res, updatedResponse);
    }
    if (!role || role == "") {
        const updatedResponse = setErrResmg(RESPONSE.REQUIRED_PARAMS, "role");
        return send(res, updatedResponse);
      }
    if (!password || password == "") {
      const updatedResponse = setErrResmg(RESPONSE.REQUIRED_PARAMS, "password");
      return send(res, updatedResponse);
    }
    const uniqueuser = await account.findOne({ where: { username } });

    if (uniqueuser) {
      return send(res, RESPONSE.AlreadyExist);
    }
    const encryptpassword = await bcrypt.hash(password, 10);

    await account.create({
      username: username,
      password: encryptpassword,
      role:role,
    });

    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("error", error.message);
  }
});
export default router;
