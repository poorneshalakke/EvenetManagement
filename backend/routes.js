import express from "express";
import register from "./src/controllers/register.js";


const routes = (app) => {
    app.use(express.json());
    app.use("/api/account/add", register);
};
export default routes;