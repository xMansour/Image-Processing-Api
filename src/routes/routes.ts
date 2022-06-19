import express from "express";
import resize from "./api/resize";

const routes = express.Router();
routes.get("/", (req, res) => {
    res.send("Main route");
    console.log("Log:: Main route");
})
routes.use("/resize", resize);



export default routes;