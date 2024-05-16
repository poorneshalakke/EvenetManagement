import jwt from "jsonwebtoken";
import { send } from "../helper/responseHelper.js";
import RESPONSE from "../configs/global.js";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return send(res, RESPONSE.ACCESS_DENIED);
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN);
    req.user = decoded;
  } catch (err) {
    return send(res, RESPONSE.INVALID_TOKEN);
  }
  return next();
};

export default authenticate;
