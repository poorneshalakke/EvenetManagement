import  { Router } from "express";
import { send } from "../helper/responseHelper";
import initAccountData from "../models/account";

const router = Router();
router.post("/",  async ( req, res )=>{
    try {
       const {username, password}=req.body; 
       const account = await initAccountData();

       await account.create({
        username:username,
        password:password
       });
       return send(res, RESPONSE.SUCCESS);
    } catch (error) {
        console.log("error");
    }
})

