import express from "express";
import HomeControllers from "../controllers/HomeController";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/home", HomeControllers.getHomePage);
  router.get("/allUser", HomeControllers.getAllUser);
  return app.use("/", router);
};
module.exports = initWebRoute;
