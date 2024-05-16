import express, { request, response } from "express";
import cors from "cors";
import getConnection from "./src/helper/dbconnection.js";
import router from "./routes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
getConnection();

router(app);
app.listen(8081, () => {
  console.log("listen....8081");
});
