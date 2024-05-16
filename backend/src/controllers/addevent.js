import { Router } from "express";
import RESPONSE from "../configs/global.js";
import { send } from "../helper/responseHelper.js";
import authenticate from "../middlewares/authonticate.js";

const router = Router();
router.post("/", authenticate, async (req, res) =>{
try {
    return send(res,RESPONSE.SUCCESS);
} catch (error) {
    
    console.log(error);
    return send(res,RESPONSE.unkownEror);
}
})
export default router;