import express, { request, response } from "express";
import cors from "cors";
import getConnection from "./src/helper/dbconnection.js";

const app = express();

app.use(cors());
getConnection();
router(app);
app.listen(8081, () => {
  console.log("listen....");
});
