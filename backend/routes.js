import express from "express";
import register from "./src/controllers/register.js";
import login from "./src/controllers/login.js";
import addevent from "./src/controllers/addevent.js";

const routes = (app) => {
    app.use(express.json());
    app.use("/api/account/add", register);
    app.use("/api/account/login",login);
    app.use("/api/event/add",addevent);
};
export default routes;