import express from "express";
import HomeControllers from "../controllers/HomeController";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/home", HomeControllers.getHomePage);
  return app.use("/", router);
};
module.exports = initWebRoute;
